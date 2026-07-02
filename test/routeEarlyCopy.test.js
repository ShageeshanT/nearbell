import test from 'node:test';
import assert from 'node:assert/strict';
import { routeEarlyCopy } from '../src/routeEarlyCopy.js';

test('formats early arrival copy', () => {
  assert.equal(routeEarlyCopy(0), 'Arriving as planned');
  assert.equal(routeEarlyCopy(1), '1 minute early');
  assert.equal(routeEarlyCopy(4.6), '5 minutes early');
});
