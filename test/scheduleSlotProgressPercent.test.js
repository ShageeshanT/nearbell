import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotProgressPercent } from '../src/scheduleSlotProgressPercent.js';

test('scheduleSlotProgressPercent scales to 0-100 inside the window', () => {
  const window = { startMinutes: 0, endMinutes: 60 };
  assert.equal(scheduleSlotProgressPercent(window, 0), 0);
  assert.equal(scheduleSlotProgressPercent(window, 30), 50);
  assert.equal(scheduleSlotProgressPercent(window, 60), 100);
  assert.equal(scheduleSlotProgressPercent(window, 90), 100);
  assert.equal(scheduleSlotProgressPercent(window, -10), 0);
});

test('scheduleSlotProgressPercent handles missing or bad window', () => {
  assert.equal(scheduleSlotProgressPercent(null, 5), 0);
  assert.equal(scheduleSlotProgressPercent({ startMinutes: 'x', endMinutes: 10 }, 5), 0);
  assert.equal(scheduleSlotProgressPercent({ startMinutes: 60, endMinutes: 0 }, 5), 0);
  assert.equal(scheduleSlotProgressPercent({ startMinutes: 0, endMinutes: 60 }, null), 0);
  assert.equal(scheduleSlotProgressPercent({ startMinutes: 0, endMinutes: 60 }, Number.NaN), 0);
});
