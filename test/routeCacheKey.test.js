import test from 'node:test';
import assert from 'node:assert/strict';
import { routeCacheKey } from '../src/routeCacheKey.js';

test('add route cache key helper', () => {
  assert.deepEqual(routeCacheKey("Home", "Campus"), "home=>campus");
});
