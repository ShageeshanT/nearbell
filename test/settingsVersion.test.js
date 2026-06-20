import test from 'node:test';
import assert from 'node:assert/strict';
import { settingsVersion } from '../src/settingsVersion.js';

test('add settings version helper', () => {
  assert.deepEqual(settingsVersion({}), 1);
});
