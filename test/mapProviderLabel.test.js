import test from 'node:test';
import assert from 'node:assert/strict';
import { mapProviderLabel } from '../src/mapProviderLabel.js';

test('mapProviderLabel names google maps', () => {
  assert.equal(mapProviderLabel('google'), 'Google Maps');
});

test('mapProviderLabel falls back for unknown providers', () => {
  assert.equal(mapProviderLabel('maze'), 'Map provider');
});
