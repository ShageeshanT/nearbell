import test from 'node:test';
import assert from 'node:assert/strict';
import { routeStatusCopy } from '../src/routeStatusCopy.js';

test('add route status copy', () => {
  assert.deepEqual(routeStatusCopy(false), "Open Google Maps navigation to start");
});
