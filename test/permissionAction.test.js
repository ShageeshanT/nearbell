import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionAction } from '../src/permissionAction.js';

test('add permission action helper', () => {
  assert.deepEqual(permissionAction("default"), "request-permission");
});
