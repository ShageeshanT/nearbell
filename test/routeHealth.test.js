import test from 'node:test';
import assert from 'node:assert/strict';
import { routeHealth } from '../src/routeHealth.js';

test('routeHealth flags blocked routes', () => {
  assert.equal(routeHealth({ hasLocation: false }), 'blocked');
});

test('routeHealth flags stale routes', () => {
  assert.equal(routeHealth({ staleSeconds: 180 }), 'stale');
});
