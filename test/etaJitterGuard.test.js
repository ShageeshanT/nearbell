import test from 'node:test';
import assert from 'node:assert/strict';
import { etaJitterGuard } from '../src/etaJitterGuard.js';

test('etaJitterGuard marks tiny deltas as noise', () => {
  assert.deepEqual(etaJitterGuard(15), { significant: false, magnitude: 15 });
  assert.deepEqual(etaJitterGuard(-45), { significant: false, magnitude: 45 });
});

test('etaJitterGuard marks large deltas as significant', () => {
  assert.deepEqual(etaJitterGuard(120), { significant: true, magnitude: 120 });
  assert.deepEqual(etaJitterGuard(-300, 60), { significant: true, magnitude: 300 });
});

test('etaJitterGuard respects custom threshold', () => {
  assert.deepEqual(etaJitterGuard(20, 10), { significant: true, magnitude: 20 });
  assert.deepEqual(etaJitterGuard(5, 10), { significant: false, magnitude: 5 });
});

test('etaJitterGuard returns a safe result for bad inputs', () => {
  assert.deepEqual(etaJitterGuard(null), { significant: false, magnitude: 0 });
  assert.deepEqual(etaJitterGuard(NaN), { significant: false, magnitude: 0 });
});
