import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficDelaySeconds } from '../src/trafficDelaySeconds.js';

test('trafficDelaySeconds returns positive delay when current exceeds freeflow', () => {
  assert.equal(trafficDelaySeconds(900, 600), 300);   // +5 min
  assert.equal(trafficDelaySeconds(3600, 1800), 1800); // +30 min
});

test('trafficDelaySeconds returns 0 when current equals or beats freeflow', () => {
  assert.equal(trafficDelaySeconds(600, 600), 0);
  assert.equal(trafficDelaySeconds(500, 600), 0); // faster than freeflow
});

test('trafficDelaySeconds returns null for invalid input', () => {
  assert.equal(trafficDelaySeconds(null, 600), null);
  assert.equal(trafficDelaySeconds(600, null), null);
  assert.equal(trafficDelaySeconds(NaN, 600), null);
  assert.equal(trafficDelaySeconds(-1, 600), null);
  assert.equal(trafficDelaySeconds(600, -1), null);
});