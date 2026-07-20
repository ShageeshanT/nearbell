import test from 'node:test';
import assert from 'node:assert/strict';
import { clockArrivalFromNow } from '../src/clockArrivalFromNow.js';

const base = new Date('2026-07-20T10:00:00');

test('clockArrivalFromNow adds minutes to the base time', () => {
  assert.equal(clockArrivalFromNow(0, base), '10:00');
  assert.equal(clockArrivalFromNow(900, base), '10:15');   // +15 min
  assert.equal(clockArrivalFromNow(3600, base), '11:00');  // +1 hr
});

test('clockArrivalFromNow rolls forward across hours', () => {
  assert.equal(clockArrivalFromNow(7200, base), '12:00');
  assert.equal(clockArrivalFromNow(60 * 60 * 24, base), '10:00'); // +24 hr
});

test('clockArrivalFromNow returns null for invalid input', () => {
  assert.equal(clockArrivalFromNow(null, base), null);
  assert.equal(clockArrivalFromNow(NaN, base), null);
  assert.equal(clockArrivalFromNow(-30, base), null);
  assert.equal(clockArrivalFromNow(60, 'now'), null);
});
