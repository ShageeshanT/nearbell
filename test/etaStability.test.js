import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyEtaStability } from '../src/etaStability.js';

test('classifyEtaStability handles limited samples', () => {
  assert.equal(classifyEtaStability([12]).level, 'unknown');
});

test('classifyEtaStability detects steady and volatile routes', () => {
  assert.equal(classifyEtaStability([12, 13, 12]).level, 'steady');
  assert.equal(classifyEtaStability([12, 18]).level, 'shifting');
  assert.equal(classifyEtaStability([12, 24]).level, 'volatile');
});
