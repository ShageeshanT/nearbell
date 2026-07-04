import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionRecoveryStep } from '../src/permissionRecovery.js';

test('permissionRecoveryStep is ready when permission is granted', () => {
  assert.equal(permissionRecoveryStep('granted'), 'ready');
});

test('permissionRecoveryStep routes denied permissions to settings', () => {
  assert.equal(permissionRecoveryStep('denied'), 'open-browser-settings');
});
