import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeFavoriteDestination } from '../src/favoriteDestination.js';

test('add favorite destination normalizer', () => {
  assert.deepEqual(normalizeFavoriteDestination("  SLIIT   Malabe  "), "SLIIT Malabe");
});
