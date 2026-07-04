import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalWindowCopy } from '../src/arrivalWindowCopy.js';

test('arrivalWindowCopy formats ranges', () => {
  assert.equal(arrivalWindowCopy({ fromMinutes: 8, toMinutes: 12 }), 'Expected arrival in 8-12 min.');
});

test('arrivalWindowCopy handles unknown values', () => {
  assert.equal(arrivalWindowCopy(), 'Arrival window is still being calculated.');
});
