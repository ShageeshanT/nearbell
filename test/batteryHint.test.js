import test from 'node:test';
import assert from 'node:assert/strict';
import { batteryHint } from '../src/batteryHint.js';

test('add battery hint helper', () => {
  assert.deepEqual(batteryHint(0.1), "Save battery while tracking");
});
