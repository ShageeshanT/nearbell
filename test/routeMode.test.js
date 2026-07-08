import test from 'node:test';
import assert from 'node:assert/strict';
import { routeModeLabel } from '../src/routeMode.js';

test('routeModeLabel labels transit routes', () => {
  assert.equal(routeModeLabel('transit'), 'transit route');
});

test('routeModeLabel defaults to driving', () => {
  assert.equal(routeModeLabel(), 'driving route');
});
