import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotMinutesUntil } from '../src/scheduleSlotMinutesUntil.js';

test('scheduleSlotMinutesUntil returns the floor of the difference', () => {
  assert.equal(scheduleSlotMinutesUntil(60, 0), 60);
  assert.equal(scheduleSlotMinutesUntil(15, 10), 5);
  assert.equal(scheduleSlotMinutesUntil(0, 30), -30);
});

test('scheduleSlotMinutesUntil returns null for bad input', () => {
  assert.equal(scheduleSlotMinutesUntil(null, 10), null);
  assert.equal(scheduleSlotMinutesUntil(10, 'soon'), null);
  assert.equal(scheduleSlotMinutesUntil(Number.NaN, 0), null);
});
