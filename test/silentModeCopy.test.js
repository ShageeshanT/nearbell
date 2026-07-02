import test from 'node:test';
import assert from 'node:assert/strict';
import { silentModeCopy } from '../src/silentModeCopy.js';

test('formats silent mode copy', () => {
  assert.equal(silentModeCopy(true), 'Silent visual alerts only');
  assert.equal(silentModeCopy(false), 'Sound and vibration enabled');
});
