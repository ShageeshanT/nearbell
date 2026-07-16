import test from 'node:test';
import assert from 'node:assert/strict';
import { routeWatchStateLabel } from '../src/routeWatchStateLabel.js';

test('routeWatchStateLabel handles idle state', () => {
  assert.equal(routeWatchStateLabel(), 'Route watch idle');
});

test('routeWatchStateLabel handles watching state', () => {
  assert.equal(routeWatchStateLabel('watching'), 'Watching route ETA');
});
