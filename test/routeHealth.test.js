import test from 'node:test';
import assert from 'node:assert/strict';
import { routeHealthLabel } from '../src/routeHealth.js';

test('routeHealthLabel marks strong scores healthy', () => {
  assert.equal(routeHealthLabel(90), 'Healthy route');
});

test('routeHealthLabel handles bad scores', () => {
  assert.equal(routeHealthLabel(20), 'Route is unreliable');
});
