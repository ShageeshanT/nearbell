import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotConflicts } from '../src/scheduleSlotConflicts.js';

test('scheduleSlotConflicts flags close matches within tolerance', () => {
  assert.equal(scheduleSlotConflicts(30, [10, 28, 90], 5), true);
  assert.equal(scheduleSlotConflicts(30, [10, 90], 5), false);
});

test('scheduleSlotConflicts handles empty and bad input safely', () => {
  assert.equal(scheduleSlotConflicts(30, [], 0), false);
  assert.equal(scheduleSlotConflicts(null, [10, 20], 0), false);
  assert.equal(scheduleSlotConflicts(30, null, 0), false);
  assert.equal(scheduleSlotConflicts(Number.NaN, [10, 20], 0), false);
});
