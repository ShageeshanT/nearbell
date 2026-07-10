import test from 'node:test';
import assert from 'node:assert/strict';
import { routeStatusLabel } from '../src/routeStatusLabel.js';

test('routeStatusLabel handles watching routes', () => {
  assert.equal(routeStatusLabel('watching'), 'Watching your route');
});

test('routeStatusLabel handles idle routes', () => {
  assert.equal(routeStatusLabel(), 'Waiting for a route');
});
