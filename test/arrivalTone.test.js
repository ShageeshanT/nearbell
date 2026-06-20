import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalTone } from '../src/arrivalTone.js';

test('add arrival tone helper', () => {
  assert.deepEqual(arrivalTone(3), "chime");
});
