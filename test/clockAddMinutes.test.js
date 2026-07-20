import test from 'node:test';
import assert from 'node:assert/strict';
import { clockAddMinutes } from '../src/clockAddMinutes.js';

const base = new Date('2026-07-20T10:00:00');

test('clockAddMinutes returns a new Date offset by N minutes', () => {
  const r = clockAddMinutes(base, 15);
  assert.equal(r.toISOString(), '2026-07-20T10:15:00.000Z');
});

test('clockAddMinutes handles zero and negative offsets', () => {
  assert.equal(clockAddMinutes(base, 0).toISOString(), '2026-07-20T10:00:00.000Z');
  assert.equal(clockAddMinutes(base, -30).toISOString(), '2026-07-20T09:30:00.000Z');
});

test('clockAddMinutes does not mutate the input', () => {
  const before = base.toISOString();
  clockAddMinutes(base, 99);
  assert.equal(base.toISOString(), before);
});

test('clockAddMinutes returns null for invalid input', () => {
  assert.equal(clockAddMinutes(null, 10), null);
  assert.equal(clockAddMinutes(base, null), null);
  assert.equal(clockAddMinutes(base, 'ten'), null);
  assert.equal(clockAddMinutes(new Date('bad'), 5), null);
});
