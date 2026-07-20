import test from 'node:test';
import assert from 'node:assert/strict';
import { etaRefreshCadence } from '../src/etaRefreshCadence.js';

test('etaRefreshCadence refreshes fast when very close', () => {
  assert.equal(etaRefreshCadence(0), 10);
  assert.equal(etaRefreshCadence(1), 10);
  assert.equal(etaRefreshCadence(2), 10);
});

test('etaRefreshCadence slows as ETA grows', () => {
  assert.equal(etaRefreshCadence(3), 20);
  assert.equal(etaRefreshCadence(5), 20);
  assert.equal(etaRefreshCadence(6), 30);
  assert.equal(etaRefreshCadence(15), 30);
  assert.equal(etaRefreshCadence(30), 60);
  assert.equal(etaRefreshCadence(60), 60);
});

test('etaRefreshCadence defaults to a slow cadence for long trips', () => {
  assert.equal(etaRefreshCadence(61), 120);
  assert.equal(etaRefreshCadence(240), 120);
});

test('etaRefreshCadence has a safe fallback', () => {
  assert.equal(etaRefreshCadence(null), 60);
  assert.equal(etaRefreshCadence(NaN), 60);
  assert.equal(etaRefreshCadence(-5), 60);
});
