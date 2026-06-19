import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionBadge } from '../src/permissionState.js';

test('add permission state badge', () => {
  assert.deepEqual(permissionBadge("denied"), "Notifications blocked");
});
