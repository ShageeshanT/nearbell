import test from 'node:test';
import assert from 'node:assert/strict';
import { createTripMemory } from '../src/tripMemory.js';

test('createTripMemory normalizes destination and eta', () => {
  assert.deepEqual(createTripMemory({ destination: '  Library ', lastEtaMinutes: 12.6, alertCount: 2 }), {
    destination: 'Library', lastEtaMinutes: 13, alertCount: 2, reusable: true,
  });
});

test('createTripMemory handles missing trip data', () => {
  assert.equal(createTripMemory({}).reusable, false);
});
