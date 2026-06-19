import test from 'node:test';
import assert from 'node:assert/strict';
import { createRouteId } from '../src/routeId.js';

test('add route id helper', () => {
  assert.deepEqual(createRouteId("SLIIT Malabe", "10"), "sliit-malabe-10");
});
