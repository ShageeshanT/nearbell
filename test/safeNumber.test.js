import test from 'node:test';
import assert from 'node:assert/strict';
import { clampNumber } from '../src/safeNumber.js';

test('add safe number clamp', () => {
  assert.deepEqual(clampNumber(9, 1, 5), 5);
});
