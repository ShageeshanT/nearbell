import test from 'node:test';
import assert from 'node:assert/strict';
import { etaConfidenceLabel } from '../src/etaConfidenceLabel.js';

test('etaConfidenceLabel handles unavailable confidence', () => {
  assert.equal(etaConfidenceLabel(), 'ETA confidence unavailable');
});

test('etaConfidenceLabel handles high confidence', () => {
  assert.equal(etaConfidenceLabel(0.9), 'ETA confidence high');
});
