import test from 'node:test';
import assert from 'node:assert/strict';
import { nextAlertOffset } from '../src/nextAlertOffset.js';

test('finds the next pending alert offset', () => {
  assert.equal(nextAlertOffset([30, 15, 5], 12), 15);
  assert.equal(nextAlertOffset([30, 15, 5], 3), 5);
  assert.equal(nextAlertOffset([5], 9), null);
});
