import test from 'node:test';
import assert from 'node:assert/strict';
import { travelModeCopy } from '../src/modeCopy.js';

test('add travel mode copy', () => {
  assert.deepEqual(travelModeCopy("walking"), "Walking");
});
