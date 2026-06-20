import test from 'node:test';
import assert from 'node:assert/strict';
import { etaDeltaMinutes } from '../src/etaDelta.js';

test('add ETA delta helper', () => {
  assert.deepEqual(etaDeltaMinutes(12, 9), -3);
});
