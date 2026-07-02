import test from 'node:test';
import assert from 'node:assert/strict';
import { sessionFreshness } from '../src/sessionFreshness.js';

test('classifies session freshness', () => {
  assert.equal(sessionFreshness(60), 'fresh');
  assert.equal(sessionFreshness(180), 'aging');
  assert.equal(sessionFreshness(600), 'stale');
});
