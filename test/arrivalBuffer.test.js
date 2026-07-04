import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalBufferMinutes } from '../src/arrivalBuffer.js';

test('arrivalBufferMinutes adds traffic pressure to the lead time', () => {
  assert.equal(arrivalBufferMinutes({ etaMinutes: 20, leadMinutes: 5, traffic: 'heavy' }), 11);
});

test('arrivalBufferMinutes handles missing ETA safely', () => {
  assert.equal(arrivalBufferMinutes({ leadMinutes: 4 }), 6);
});
