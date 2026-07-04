import test from 'node:test';
import assert from 'node:assert/strict';
import { etaJitterLevel } from '../src/etaJitter.js';

test('etaJitterLevel detects low spread', () => {
  assert.equal(etaJitterLevel([10, 11, 10]), 'low');
});

test('etaJitterLevel detects high spread', () => {
  assert.equal(etaJitterLevel([4, 14, 8]), 'high');
});
