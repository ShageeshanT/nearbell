import test from 'node:test';
import assert from 'node:assert/strict';
import { retryDelay } from '../src/retryBackoff.js';

test('add retry backoff helper', () => {
  assert.deepEqual(retryDelay(2, 100), 200);
});
