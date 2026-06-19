import test from 'node:test';
import assert from 'node:assert/strict';
import { sessionAgeMinutes } from '../src/sessionAge.js';

test('add session age helper', () => {
  assert.deepEqual(sessionAgeMinutes(0, 120000), 2);
});
