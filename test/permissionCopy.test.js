import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionCopy } from '../src/permissionCopy.js';

test('permissionCopy explains notification permission', () => {
  assert.equal(permissionCopy(), 'Allow notifications so NearBell can remind you before arrival.');
});

test('permissionCopy explains alarm permission', () => {
  assert.equal(permissionCopy('alarms'), 'Allow alarms so NearBell can ring before arrival.');
});
