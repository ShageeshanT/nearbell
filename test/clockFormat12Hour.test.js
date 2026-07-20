import test from 'node:test';
import assert from 'node:assert/strict';
import { clockFormat12Hour } from '../src/clockFormat12Hour.js';

test('clockFormat12Hour renders morning hours with AM', () => {
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 0, 0)), '12:00 AM');
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 3, 5)), '3:05 AM');
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 11, 59)), '11:59 AM');
});

test('clockFormat12Hour renders afternoon hours with PM', () => {
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 12, 0)), '12:00 PM');
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 14, 30)), '2:30 PM');
  assert.equal(clockFormat12Hour(new Date(2026, 0, 1, 23, 45)), '11:45 PM');
});

test('clockFormat12Hour rejects invalid input', () => {
  assert.equal(clockFormat12Hour(null), null);
  assert.equal(clockFormat12Hour('2026-01-01'), null);
  assert.equal(clockFormat12Hour(new Date('not a date')), null);
});
