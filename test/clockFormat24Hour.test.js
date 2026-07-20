import test from 'node:test';
import assert from 'node:assert/strict';
import { clockFormat24Hour } from '../src/clockFormat24Hour.js';

test('clockFormat24Hour zero-pads single-digit components', () => {
  assert.equal(clockFormat24Hour(new Date(2026, 0, 1, 3, 5)), '03:05');
  assert.equal(clockFormat24Hour(new Date(2026, 0, 1, 9, 9)), '09:09');
});

test('clockFormat24Hour renders valid afternoon times', () => {
  assert.equal(clockFormat24Hour(new Date(2026, 0, 1, 14, 30)), '14:30');
  assert.equal(clockFormat24Hour(new Date(2026, 0, 1, 23, 59)), '23:59');
});

test('clockFormat24Hour rejects invalid input', () => {
  assert.equal(clockFormat24Hour(null), null);
  assert.equal(clockFormat24Hour('2026-01-01'), null);
  assert.equal(clockFormat24Hour(new Date('not a date')), null);
});
