import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleNextSlotFromNow } from '../src/scheduleNextSlotFromNow.js';

test('scheduleNextSlotFromNow picks the first slot after now', () => {
  assert.equal(scheduleNextSlotFromNow([10, 25, 60, 90], 30), 60);
  assert.equal(scheduleNextSlotFromNow([10, 20, 30], 5), 10);
});

test('scheduleNextSlotFromNow returns null when nothing qualifies', () => {
  assert.equal(scheduleNextSlotFromNow([1, 2, 3], 10), null);
  assert.equal(scheduleNextSlotFromNow(null, 10), null);
  assert.equal(scheduleNextSlotFromNow([1, 2], 'nope'), null);
});

test('scheduleNextSlotFromNow skips non-finite entries', () => {
  assert.equal(scheduleNextSlotFromNow([Number.NaN, 5, 20], 4), 5);
});
