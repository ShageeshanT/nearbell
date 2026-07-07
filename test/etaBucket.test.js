import test from 'node:test';
import assert from 'node:assert/strict';
import { etaBucket } from '../src/etaBucket.js';

test('etaBucket marks immediate arrivals', () => {
  assert.equal(etaBucket(4), 'immediate');
});

test('etaBucket marks later arrivals', () => {
  assert.equal(etaBucket(24), 'later');
});
