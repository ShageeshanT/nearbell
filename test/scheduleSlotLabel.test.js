import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotLabel } from '../src/scheduleSlotLabel.js';

test('scheduleSlotLabel renders short offsets as minutes', () => {
  assert.equal(scheduleSlotLabel(0), 'now');
  assert.equal(scheduleSlotLabel(1), 'in 1m');
  assert.equal(scheduleSlotLabel(45), 'in 45m');
});

test('scheduleSlotLabel renders hour offsets', () => {
  assert.equal(scheduleSlotLabel(60), 'in 1h');
  assert.equal(scheduleSlotLabel(120), 'in 2h');
  assert.equal(scheduleSlotLabel(75), 'in 1h15m');
});

test('scheduleSlotLabel returns null for bad input', () => {
  assert.equal(scheduleSlotLabel(null), null);
  assert.equal(scheduleSlotLabel(-5), null);
  assert.equal(scheduleSlotLabel(Number.NaN), null);
});
