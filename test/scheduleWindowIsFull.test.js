import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleWindowIsFull } from '../src/scheduleWindowIsFull.js';

test('scheduleWindowIsFull respects the slot cap', () => {
  assert.equal(scheduleWindowIsFull({ slots: [1, 2, 3, 4, 5, 6, 7, 8] }, 8), true);
  assert.equal(scheduleWindowIsFull({ slots: [1, 2, 3] }, 8), false);
});

test('scheduleWindowIsFull falls back to default cap 8', () => {
  const slots = Array.from({ length: 8 }, (_, i) => i);
  assert.equal(scheduleWindowIsFull({ slots }, 4), true);
  assert.equal(scheduleWindowIsFull({ slots }), true);
});

test('scheduleWindowIsFull handles missing or bad window', () => {
  assert.equal(scheduleWindowIsFull(null), false);
  assert.equal(scheduleWindowIsFull({}), false);
});
