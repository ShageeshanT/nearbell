import test from 'node:test';
import assert from 'node:assert/strict';
import { etaDeltaSignificance } from '../src/etaDeltaSignificance.js';

test('etaDeltaSignificance buckets tiny jitter', () => {
  assert.deepEqual(etaDeltaSignificance(0), { tier: 'tiny', label: 'minor change' });
  assert.deepEqual(etaDeltaSignificance(15), { tier: 'tiny', label: 'minor change' });
  assert.deepEqual(etaDeltaSignificance(-29), { tier: 'tiny', label: 'minor change' });
});

test('etaDeltaSignificance labels minute-scale deltas', () => {
  assert.deepEqual(etaDeltaSignificance(45), { tier: 'small', label: 'a minute or two' });
  assert.deepEqual(etaDeltaSignificance(-90), { tier: 'small', label: 'a minute or two' });
});

test('etaDeltaSignificance escalates to medium and large', () => {
  assert.deepEqual(etaDeltaSignificance(240), { tier: 'medium', label: 'a few minutes' });
  assert.deepEqual(etaDeltaSignificance(600), { tier: 'large', label: 'several minutes' });
});

test('etaDeltaSignificance flags truly large shifts as major', () => {
  assert.deepEqual(etaDeltaSignificance(1500), { tier: 'major', label: 'a much longer trip' });
  assert.deepEqual(etaDeltaSignificance(-2400), { tier: 'major', label: 'a much longer trip' });
});

test('etaDeltaSignificance falls back gracefully', () => {
  assert.deepEqual(etaDeltaSignificance(null), { tier: 'unknown', label: 'unchanged' });
  assert.deepEqual(etaDeltaSignificance(NaN), { tier: 'unknown', label: 'unchanged' });
});
