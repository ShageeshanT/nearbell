import test from 'node:test';
import assert from 'node:assert/strict';
import { alertReadinessScoreV2 } from './03-alertReadinessScoreV2.js';

test('alertReadinessScoreV2 high near arrival', () => {
  const score = alertReadinessScoreV2({ eta: 1, distance: 0.2, signalQuality: 1 });
  assert.ok(score >= 0.9, `expected >= 0.9 got ${score}`);
});

test('alertReadinessScoreV2 low far away', () => {
  const score = alertReadinessScoreV2({ eta: 60, distance: 30, signalQuality: 0.4 });
  assert.ok(score < 0.3, `expected < 0.3 got ${score}`);
});