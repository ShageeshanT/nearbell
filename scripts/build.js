import { mkdir, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await cp('extension', 'dist/extension', { recursive: true });
console.log('Built NearBell extension files into dist/extension');
