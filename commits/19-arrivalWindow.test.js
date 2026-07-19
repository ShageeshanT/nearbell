import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalWindowCopy } from './09-arrivalWindowCopy.js';
import { arrivalRiskCopy } from './10-arrivalRiskCopy.js';

test('arrivalWindowCopy now', () => {
  assert.equal(arrivalWindowCopy({ destination: 'SLIIT', minutes: 0 }), 'Arriving at SLIIT now.');
});

test('arrivalWindowCopy singular', () => {
  assert.equal(arrivalWindowCopy({ destination: 'Fort', minutes: 1 }), 'One minute to Fort.');
});

test('arrivalRiskCopy risk levels', () => {
  assert.equal(arrivalRiskCopy({ risk: 'high', destination: 'SLIIT' }), 'Traffic risk high before SLIIT; leave buffer.');
  assert.equal(arrivalRiskCopy({ risk: 'low', destination: 'Fort' }), 'Fort arrival looks steady.');
});