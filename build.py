#!/usr/bin/env python3
"""
Builds standalone single-file index.html from modular src/ files.
"""
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')

PARTS = [
    'shell_head.html',
    'core.js',
    'data_p1.js',
    'data_p2.js',
    'data_c1.js',
    'data_c2.js',
    'data_c3.js',
    'app.js',
    'shell_tail.html',
]

def main():
    chunks = []
    for name in PARTS:
        p = os.path.join(SRC, name)
        if not os.path.exists(p):
            print(f'[WARN] Missing {name}')
            continue
        with open(p, 'r', encoding='utf-8') as f:
            chunks.append(f'\n/* === FILE: {name} === */\n' if name.endswith('.js') else '')
            chunks.append(f.read())
    out_path = os.path.join(ROOT, 'index.html')
    full = '\n'.join(chunks)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(full)
    print(f'Built {out_path} ({len(full):,} bytes)')

if __name__ == '__main__':
    main()
