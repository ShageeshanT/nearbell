import test from 'node:test';
import assert from 'node:assert/strict';
import { betaReadinessScore } from '../src/betaReadinessScore.js';

test('betaReadinessScore reports full readiness', () => {
  assert.equal(betaReadinessScore({ tests: true, lint: true, build: true, manualPass: true }), 100);
});

test('betaReadinessScore reports partial readiness', () => {
  assert.equal(betaReadinessScore({ tests: true, lint: true }), 50);
});
