import test from 'node:test';
import assert from 'node:assert/strict';
import { explainPermission } from '../src/permissionsCopy.js';

test('permissions explainer', async () => {
assert.match(explainPermission('notifications'), /ring/);
});
