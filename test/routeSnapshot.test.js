import test from 'node:test';
import assert from 'node:assert/strict';

test('route snapshot model', async () => {
import { createRouteSnapshot, isRouteActive } from '../src/routeSnapshot.js';
assert.equal(createRouteSnapshot({etaMinutes:12,destination:'Home'}).destination, 'Home');
assert.equal(isRouteActive({etaMinutes: 1}), true);
});
