import test from 'node:test';
import assert from 'node:assert/strict';
import { createRouteSnapshot, isRouteActive } from '../src/routeSnapshot.js';

test('route snapshot model', async () => {
assert.equal(createRouteSnapshot({etaMinutes:12,destination:'Home'}).destination, 'Home');
assert.equal(isRouteActive({etaMinutes: 1}), true);
});
