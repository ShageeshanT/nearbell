import test from 'node:test';
import assert from 'node:assert/strict';
import { alertPriority } from '../src/alertPriority.js';

test('add alert priority helper', () => {
  assert.deepEqual(alertPriority(5), "urgent");
});
