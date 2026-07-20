import test from 'node:test';
import assert from 'node:assert/strict';
import { etaFormatCompact } from '../src/etaFormatCompact.js';

test('etaFormatCompact renders minutes-only under one hour', () => {
  assert.equal(etaFormatCompact(60), '1m');
  assert.equal(etaFormatCompact(900), '15m');
  assert.equal(etaFormatCompact(3540), '59m');
});

test('etaFormatCompact switches to hours at 60 minutes', () => {
  assert.equal(etaFormatCompact(3600), '1h');
  assert.equal(etaFormatCompact(3660), '1h 1m');
  assert.equal(etaFormatCompact(4500), '1h 15m');
  assert.equal(etaFormatCompact(7200), '2h');
});

test('etaFormatCompact returns null for invalid inputs', () => {
  assert.equal(etaFormatCompact(null), null);
  assert.equal(etaFormatCompact(undefined), null);
  assert.equal(etaFormatCompact(NaN), null);
  assert.equal(etaFormatCompact(-1), null);
});
