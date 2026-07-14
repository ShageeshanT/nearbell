import test from 'node:test';
import assert from 'node:assert/strict';
import { mapsPermissionHint } from '../src/mapsPermissionHint.js';

test('mapsPermissionHint handles ready state', () => {
  assert.equal(mapsPermissionHint(), 'NearBell can watch this Maps route.');
});

test('mapsPermissionHint handles blocked state', () => {
  assert.equal(mapsPermissionHint('blocked'), 'Allow NearBell on Google Maps to read route ETA text.');
});
