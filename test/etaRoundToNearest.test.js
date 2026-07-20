import test from 'node:test';
import assert from 'node:assert/strict';
import { etaRoundToNearest } from '../src/etaRoundToNearest.js';

test('etaRoundToNearest rounds to nearest minute by default', () => {
  assert.equal(etaRoundToNearest(870), 15); // 14.5 -> 15
  assert.equal(etaRoundToNearest(900), 15); // 15.0 -> 15
  assert.equal(etaRoundToNearest(929), 15); // 15.483 -> 15
});

test('etaRoundToNearest rejects bad inputs', () => {
  assert.equal(etaRoundToNearest(null), null);
  assert.equal(etaRoundToNearest(undefined), null);
  assert.equal(etaRoundToNearest(NaN), null);
  assert.equal(etaRoundToNearest(-30), null);
});

test('etaRoundToNearest supports custom step buckets', () => {
  assert.equal(etaRoundToNearest(910, 5), 15); // 15.16 -> 15
  assert.equal(etaRoundToNearest(960, 5), 15); // 16.0 -> 15 (rounds down at exact midpoint)
  assert.equal(etaRoundToNearest(1200, 5), 20);
});

test('etaRoundToNearest handles zero as a real value', () => {
  assert.equal(etaRoundToNearest(0), 0);
});
