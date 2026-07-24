import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleWindowOverlaps } from '../src/scheduleWindowOverlaps.js';

test('scheduleWindowOverlaps detects a true overlap', () => {
  assert.equal(
    scheduleWindowOverlaps({ startMinutes: 0, endMinutes: 60 }, { startMinutes: 30, endMinutes: 90 }),
    true
  );
});

test('scheduleWindowOverlaps returns false for adjacent windows', () => {
  assert.equal(
    scheduleWindowOverlaps({ startMinutes: 0, endMinutes: 60 }, { startMinutes: 60, endMinutes: 120 }),
    false
  );
});

test('scheduleWindowOverlaps returns false for missing or inverted windows', () => {
  assert.equal(scheduleWindowOverlaps(null, { startMinutes: 0, endMinutes: 60 }), false);
  assert.equal(
    scheduleWindowOverlaps({ startMinutes: 90, endMinutes: 30 }, { startMinutes: 0, endMinutes: 60 }),
    false
  );
});
