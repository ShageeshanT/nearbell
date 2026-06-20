import test from 'node:test';
import assert from 'node:assert/strict';
import { alertProgress } from '../src/alertProgress.js';

test('add alert progress helper', () => {
  assert.deepEqual(alertProgress(2, 4), 0.5);
});
