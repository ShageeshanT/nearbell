import test from 'node:test';
import assert from 'node:assert/strict';
import { routeModeIcon } from '../src/routeModeIcon.js';

test('add route mode icon helper', () => {
  assert.deepEqual(routeModeIcon("transit"), "🚌");
});
