import test from 'node:test';
import assert from 'node:assert/strict';
import { thresholdLabel } from '../src/thresholdLabel.js';

test('thresholdLabel handles singular minutes', () => {
  assert.equal(thresholdLabel(1), '1 minute before');
});

test('thresholdLabel handles plural minutes', () => {
  assert.equal(thresholdLabel(15), '15 minutes before');
});
