import test from 'node:test';
import assert from 'node:assert/strict';
import { scheduleSlotBucket } from '../src/scheduleSlotBucket.js';

test('scheduleSlotBucket returns the right part of day', () => {
  assert.equal(scheduleSlotBucket(60), 'early-morning');
  assert.equal(scheduleSlotBucket(8 * 60), 'morning');
  assert.equal(scheduleSlotBucket(13 * 60), 'afternoon');
  assert.equal(scheduleSlotBucket(19 * 60), 'evening');
  assert.equal(scheduleSlotBucket(23 * 60), 'night');
});

test('scheduleSlotBucket wraps after 24h and returns null on bad input', () => {
  assert.equal(scheduleSlotBucket(24 * 60 + 30), 'early-morning');
  assert.equal(scheduleSlotBucket(null), null);
  assert.equal(scheduleSlotBucket(-1), null);
  assert.equal(scheduleSlotBucket(Number.NaN), null);
});
