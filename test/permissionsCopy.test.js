import test from 'node:test';
import assert from 'node:assert/strict';

test('permissions explainer', async () => {
import { explainPermission } from '../src/permissionsCopy.js';
assert.match(explainPermission('notifications'), /ring/);
});
