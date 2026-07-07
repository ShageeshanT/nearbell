import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionCopy } from '../src/permissionCopy.js';

test('permissionCopy confirms granted state', () => {
  assert.equal(permissionCopy('granted'), 'Arrival alerts are ready.');
});

test('permissionCopy explains denied state', () => {
  assert.equal(permissionCopy('denied'), 'Enable notifications to hear arrival alerts.');
});
