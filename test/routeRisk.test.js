import test from 'node:test';
import assert from 'node:assert/strict';
import { routeRisk } from '../src/routeRisk.js';

test('routeRisk marks calm routes as low risk', () => {
  assert.deepEqual(routeRisk({ etaMinutes: 25 }), { level: 'low', score: 0, copy: 'Route alert risk looks low.' });
});

test('routeRisk escalates urgent routes with missing permission', () => {
  assert.equal(routeRisk({ etaMinutes: 3, permission: 'denied' }).level, 'high');
});
