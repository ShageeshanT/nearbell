import test from 'node:test';
import assert from 'node:assert/strict';
import { routeDelayCopy } from '../src/routeDelayCopy.js';

test('formats route delay copy', () => {
  assert.equal(routeDelayCopy(0), 'On time');
  assert.equal(routeDelayCopy(1), '1 minute late');
  assert.equal(routeDelayCopy(8.4), '8 minutes late');
});
