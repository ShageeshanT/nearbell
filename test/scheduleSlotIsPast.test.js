import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotIsPast } from '../src/scheduleSlotIsPast.js';

test('scheduleSlotIsPast identifies past and future offsets', () => {
  assert.equal(scheduleSlotIsPast(5, 10), true);
  assert.equal(scheduleSlotIsPast(15, 10), false);
  assert.equal(scheduleSlotIsPast(10, 10), false);
});

test('scheduleSlotIsPast returns null for bad input', () => {
  assert.equal(scheduleSlotIsPast(null, 0), null);
  assert.equal(scheduleSlotIsPast(5, 'now'), null);
  assert.equal(scheduleSlotIsPast(Number.NaN, 0), null);
});
