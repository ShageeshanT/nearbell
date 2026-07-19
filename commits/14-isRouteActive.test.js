import test from 'node:test';
import assert from 'node:assert/strict';
import { isRouteActive } from './02-isRouteActive.js';

test('isRouteActive true when eta set', () => {
  assert.equal(isRouteActive({ status: 'tracking', etaMinutes: 12 }), true);
});

test('isRouteActive false when incomplete', () => {
  assert.equal(isRouteActive({ status: 'incomplete', etaMinutes: null }), false);
});

test('isRouteActive false for bad input', () => {
  assert.equal(isRouteActive(null), false);
  assert.equal(isRouteActive(undefined), false);
});