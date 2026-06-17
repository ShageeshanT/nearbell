import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});const files=[];for(const entry of entries){const path=join(dir,entry.name);if(entry.isDirectory()&&!['.git','node_modules','dist'].includes(entry.name)) files.push(...await walk(path));if(entry.isFile()&&/\.(js|md|json|html|css)$/.test(entry.name)) files.push(path);}return files;}
const files=await walk('.');for(const file of files){const text=await readFile(file,'utf8');if(text.includes('NEARBELL_' + 'BLOCKED_' + 'MARKER')) throw new Error(`Lint marker found in ${file}`);}console.log(`Linted ${files.length} files`);
