import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeSettings } from '../src/settings.js';

test('settings defaults', async () => {
assert.equal(mergeSettings({sound:'ping'}).sound, 'ping');
assert.equal(mergeSettings({}).presetId, 'commute');
});
