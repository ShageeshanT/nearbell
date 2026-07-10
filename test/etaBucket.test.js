import test from 'node:test';
import assert from 'node:assert/strict';
import { etaBucket } from '../src/etaBucket.js';

test('etaBucket marks near arrivals', () => {
  assert.equal(etaBucket(4), 'near');
});

test('etaBucket marks longer trips', () => {
  assert.equal(etaBucket(60), 'long trip');
});
