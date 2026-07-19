import test from 'node:test';
import assert from 'node:assert/strict';
import { etaStability } from './07-etaStability.js';
import { arrivalConfidence } from './08-arrivalConfidence.js';

test('etaStability 1 for stable samples', () => {
  assert.equal(etaStability([10, 10, 10]), 1);
});

test('etaStability lower for jitter', () => {
  const s = etaStability([5, 25, 15, 30, 8]);
  assert.ok(s < 0.8, `expected < 0.8 got ${s}`);
});

test('arrivalConfidence weighted blend', () => {
  const c = arrivalConfidence({ etaStability: 0.5, signalQuality: 1 });
  assert.ok(c > 0.6 && c < 0.7, `expected ~0.65 got ${c}`);
});