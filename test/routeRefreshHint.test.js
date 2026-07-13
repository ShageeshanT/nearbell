import test from 'node:test';
import assert from 'node:assert/strict';
import { routeRefreshHint } from '../src/routeRefreshHint.js';

test('routeRefreshHint handles fresh routes', () => {
  assert.equal(routeRefreshHint(), 'Route ETA is ready for NearBell alerts.');
});

test('routeRefreshHint handles stale routes', () => {
  assert.equal(routeRefreshHint('stale'), 'Refresh Maps to update the route ETA.');
});
