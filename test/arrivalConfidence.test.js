import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalConfidenceLabel } from '../src/arrivalConfidence.js';

test('arrivalConfidenceLabel marks high confidence', () => {
  assert.equal(arrivalConfidenceLabel(0.9), 'high confidence');
});

test('arrivalConfidenceLabel marks low confidence', () => {
  assert.equal(arrivalConfidenceLabel(0.2), 'low confidence');
});
