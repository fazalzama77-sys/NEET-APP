/* ==========================================================================
   NEET-UG Tactical Engine - Service Worker
   Offline-First PWA caching strategy with Stale-While-Revalidate and
   immediate offline fallback for all 40 NMC revision units.
   ========================================================================== */

const CACHE_NAME = 'neet-trainer-v1.0.1';
const FONT_CACHE = 'neet-fonts-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './manifest.json',
  './favicon.ico',
  './icons/favicon.svg',
  './icons/favicon-16.png',
  './icons/favicon-32.png',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

/* ---------------- Installation ---------------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use resilient caching so missing optional assets don't fail the install
      return Promise.allSettled(
        CORE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[PWA SW] Pre-cache item failed:', url, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

/* ---------------- Activation & Cleanup ---------------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== FONT_CACHE) {
            console.log('[PWA SW] Removing outdated cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

/* ---------------- Fetch Strategy ---------------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle HTTP/HTTPS GET requests
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 1. Google Fonts Cache (Cache-First with dynamic runtime caching)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) => {
        return cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              cache.put(req, networkRes.clone());
            }
            return networkRes;
          }).catch(() => cached);
        });
      })
    );
    return;
  }

  // 2. Navigation / HTML Requests (Stale-While-Revalidate with Instant Offline Fallback)
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match(req).then((cached) => {
        // Fetch network in background or as fallback
        const networkFetch = fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        }).catch(() => {
          // If offline and request wasn't cached, return cached index.html
          return cached || caches.match('./index.html') || caches.match('./');
        });

        // Return cached page instantly if present, else wait for network
        return cached || networkFetch;
      })
    );
    return;
  }

  // 3. Static Assets & App Resources (Cache-First with background revalidation)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Revalidate in background if online
        fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes));
          }
        }).catch(() => {/* Ignore background network failure */});
        return cached;
      }

      // Not in cache: fetch from network and cache
      return fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200 && networkRes.type === 'basic') {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return networkRes;
      }).catch(() => {
        // Offline fallback for any failed relative navigation
        if (req.destination === 'document') {
          return caches.match('./index.html') || caches.match('./');
        }
      });
    })
  );
});

/* ---------------- Message Handling ---------------- */
self.addEventListener('message', (event) => {
  if (event.data && (event.data === 'SKIP_WAITING' || event.data.type === 'SKIP_WAITING')) {
    self.skipWaiting();
  }
});
