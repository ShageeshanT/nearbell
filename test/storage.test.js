import test from 'node:test';
import assert from 'node:assert/strict';

test('storage adapter boundary', async () => {
import { loadSettings, saveSettings } from '../src/storage.js';
const data = new Map(); const storage = { get: async k => data.get(k), set: async (k,v) => data.set(k,v) };
await saveSettings(storage,{sound:'ping'});
assert.equal((await loadSettings(storage)).sound, 'ping');
});
