import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionStateLabel } from '../src/permissionState.js';

test('permissionStateLabel marks granted state', () => {
  assert.equal(permissionStateLabel('granted'), 'enabled');
});

test('permissionStateLabel marks prompt state', () => {
  assert.equal(permissionStateLabel('prompt'), 'needs-permission');
});
