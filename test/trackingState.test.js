import test from 'node:test';
import assert from 'node:assert/strict';
import { trackingState } from '../src/trackingState.js';

test('add tracking state helper', () => {
  assert.deepEqual(trackingState(true, false), "tracking");
});
