import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalUrgencyLabel } from '../src/arrivalUrgencyLabel.js';

test('arrivalUrgencyLabel handles unknown arrival', () => {
  assert.equal(arrivalUrgencyLabel(), 'Arrival urgency unknown');
});

test('arrivalUrgencyLabel handles soon arrival', () => {
  assert.equal(arrivalUrgencyLabel(8), 'Arrival soon');
});
