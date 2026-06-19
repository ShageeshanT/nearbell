import test from 'node:test';
import assert from 'node:assert/strict';
import { importSettings } from '../src/importSettings.js';

test('add settings import helper', () => {
  assert.deepEqual(importSettings('{"settings":{"sound":"bell"}}'), { sound: "bell" });
});
