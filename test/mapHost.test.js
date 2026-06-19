import test from 'node:test';
import assert from 'node:assert/strict';
import { isSupportedMapHost } from '../src/mapHost.js';

test('add supported map host check', () => {
  assert.deepEqual(isSupportedMapHost("maps.google.com"), true);
});
