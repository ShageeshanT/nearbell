import test from 'node:test';
import assert from 'node:assert/strict';
import { routeSourceLabel } from '../src/routeSourceLabel.js';

test('labels route ETA sources', () => {
  assert.equal(routeSourceLabel('manual'), 'Manual ETA');
  assert.equal(routeSourceLabel('maps'), 'Maps ETA');
  assert.equal(routeSourceLabel('other'), 'Route ETA');
});
