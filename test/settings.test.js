import test from 'node:test';
import assert from 'node:assert/strict';

test('settings defaults', async () => {
import { mergeSettings } from '../src/settings.js';
assert.equal(mergeSettings({sound:'ping'}).sound, 'ping');
assert.equal(mergeSettings({}).presetId, 'commute');
});
