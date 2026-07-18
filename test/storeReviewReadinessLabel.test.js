import test from 'node:test';
import assert from 'node:assert/strict';
import { storeReviewReadinessLabel } from '../src/storeReviewReadinessLabel.js';

test('storeReviewReadinessLabel handles low readiness', () => {
  assert.equal(storeReviewReadinessLabel(20), 'Store review not ready');
});

test('storeReviewReadinessLabel handles ready score', () => {
  assert.equal(storeReviewReadinessLabel(82), 'Store review ready');
});
