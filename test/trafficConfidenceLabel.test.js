import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficConfidenceLabel } from '../src/trafficConfidenceLabel.js';

test('trafficConfidenceLabel maps variance to confidence tiers', () => {
  assert.equal(trafficConfidenceLabel(0), 'high confidence');
  assert.equal(trafficConfidenceLabel(29), 'high confidence');
  assert.equal(trafficConfidenceLabel(30), 'medium confidence');
  assert.equal(trafficConfidenceLabel(119), 'medium confidence');
  assert.equal(trafficConfidenceLabel(120), 'low confidence');
  assert.equal(trafficConfidenceLabel(600), 'low confidence');
});

test('trafficConfidenceLabel rejects invalid input', () => {
  assert.equal(trafficConfidenceLabel(null), null);
  assert.equal(trafficConfidenceLabel(NaN), null);
  assert.equal(trafficConfidenceLabel(-1), null);
});