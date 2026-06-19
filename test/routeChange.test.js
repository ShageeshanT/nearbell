import test from 'node:test';
import assert from 'node:assert/strict';
import { routeChanged } from '../src/routeChange.js';

test('add route change detector', () => {
  assert.deepEqual(routeChanged({ destination: "A" }, { destination: "B" }), true);
});
