import test from 'node:test';
import assert from 'node:assert/strict';
import { confidenceLabel } from '../src/arrivalConfidence.js';

test('add arrival confidence helper', () => {
  assert.deepEqual(confidenceLabel(0.9), "high");
});
