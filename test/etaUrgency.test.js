import test from 'node:test';
import assert from 'node:assert/strict';
import { etaUrgency } from '../src/etaUrgency.js';

test('classifies ETA urgency bands', () => {
  assert.equal(etaUrgency(3), 'now');
  assert.equal(etaUrgency(12), 'soon');
  assert.equal(etaUrgency(25), 'later');
  assert.equal(etaUrgency('bad'), 'unknown');
});
