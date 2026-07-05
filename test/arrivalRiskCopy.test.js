import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalRiskCopy } from '../src/arrivalRiskCopy.js';

test('arrivalRiskCopy explains high risk', () => {
  assert.equal(arrivalRiskCopy('high'), 'Arrival alert needs attention now.');
});

test('arrivalRiskCopy defaults to safe copy', () => {
  assert.equal(arrivalRiskCopy(), 'Arrival alert looks safe.');
});
