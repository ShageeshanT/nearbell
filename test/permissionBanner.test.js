import test from 'node:test';
import assert from 'node:assert/strict';
import { permissionBanner } from '../src/permissionBanner.js';

test('maps permission state to banner copy', () => {
  assert.equal(permissionBanner('granted'), 'NearBell alerts are ready.');
  assert.equal(permissionBanner('denied'), 'Enable notifications in browser settings.');
  assert.equal(permissionBanner('prompt'), 'Allow notifications to hear arrival alerts.');
});
