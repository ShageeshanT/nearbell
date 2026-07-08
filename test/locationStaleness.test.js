import test from 'node:test';
import assert from 'node:assert/strict';
import { locationStaleness } from '../src/locationStaleness.js';

test('locationStaleness marks fresh fixes', () => {
  assert.equal(locationStaleness(20), 'fresh');
});

test('locationStaleness marks stale fixes', () => {
  assert.equal(locationStaleness(150), 'stale');
});
