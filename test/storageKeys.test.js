import test from 'node:test';
import assert from 'node:assert/strict';
import { storageKey } from '../src/storageKeys.js';

test('add storage key helper', () => {
  assert.deepEqual(storageKey("custom"), "nearbell.custom");
});
