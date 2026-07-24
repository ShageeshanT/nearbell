import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleWindowLength } from '../src/scheduleWindowLength.js';

test('scheduleWindowLength returns the difference when end >= start', () => {
  assert.equal(scheduleWindowLength({ startMinutes: 0, endMinutes: 90 }), 90);
  assert.equal(scheduleWindowLength({ startMinutes: 15, endMinutes: 60 }), 45);
});

test('scheduleWindowLength returns 0 for inverted or bad input', () => {
  assert.equal(scheduleWindowLength({ startMinutes: 90, endMinutes: 30 }), 0);
  assert.equal(scheduleWindowLength(null), 0);
  assert.equal(scheduleWindowLength({}), 0);
  assert.equal(scheduleWindowLength({ startMinutes: 'x', endMinutes: 10 }), 0);
});
