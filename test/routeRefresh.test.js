import test from 'node:test';
import assert from 'node:assert/strict';
import { routeRefreshIntervalSeconds } from '../src/routeRefresh.js';

test('routeRefreshIntervalSeconds refreshes faster near arrival', () => {
  assert.equal(routeRefreshIntervalSeconds({ etaMinutes: 4 }), 15);
});

test('routeRefreshIntervalSeconds conserves battery', () => {
  assert.equal(routeRefreshIntervalSeconds({ batteryMode: 'conserve' }), 90);
});
