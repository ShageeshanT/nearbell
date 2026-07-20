import test from 'node:test';
import assert from 'node:assert/strict';
import { etaQuickLabel } from '../src/etaQuickLabel.js';

test('etaQuickLabel renders singular and plural minutes', () => {
  assert.equal(etaQuickLabel(60), '1 minute away');
  assert.equal(etaQuickLabel(120), '2 minutes away');
  assert.equal(etaQuickLabel(900), '15 minutes away');
});

test('etaQuickLabel renders singular and plural hours', () => {
  assert.equal(etaQuickLabel(3600), '1 hour away');
  assert.equal(etaQuickLabel(7200), '2 hours away');
});

test('etaQuickLabel combines hours and minutes', () => {
  assert.equal(etaQuickLabel(3660), '1 hour 1 minute away');
  assert.equal(etaQuickLabel(7320), '2 hours 2 minutes away');
});

test('etaQuickLabel returns null on invalid input', () => {
  assert.equal(etaQuickLabel(null), null);
  assert.equal(etaQuickLabel(NaN), null);
  assert.equal(etaQuickLabel(-30), null);
});
