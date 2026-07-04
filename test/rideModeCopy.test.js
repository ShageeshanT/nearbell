import test from 'node:test';
import assert from 'node:assert/strict';
import { rideModeCopy } from '../src/rideModeCopy.js';

test('rideModeCopy names known modes', () => {
  assert.equal(rideModeCopy('transit'), 'Transit mode');
});

test('rideModeCopy falls back for unknown modes', () => {
  assert.equal(rideModeCopy('boat'), 'Route mode');
});
