import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotForAlert } from '../src/scheduleSlotForAlert.js';

test('scheduleSlotForAlert builds an ISO timestamp at the offset', () => {
  const base = Date.UTC(2026, 6, 24, 10, 0, 0);
  assert.equal(scheduleSlotForAlert(base, 15), '2026-07-24T10:15:00.000Z');
  assert.equal(scheduleSlotForAlert(base, -30), '2026-07-24T09:30:00.000Z');
});

test('scheduleSlotForAlert returns null for bad input', () => {
  assert.equal(scheduleSlotForAlert(null, 5), null);
  assert.equal(scheduleSlotForAlert(Date.now(), null), null);
  assert.equal(scheduleSlotForAlert('nope', 5), null);
  assert.equal(scheduleSlotForAlert(Date.now(), Number.NaN), null);
});
