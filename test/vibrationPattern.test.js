import test from 'node:test';
import assert from 'node:assert/strict';
import { vibrationPattern } from '../src/vibrationPattern.js';

test('returns vibration patterns by urgency', () => {
  assert.deepEqual(vibrationPattern('quiet'), [80]);
  assert.deepEqual(vibrationPattern('urgent'), [180, 90, 180, 90, 240]);
  assert.deepEqual(vibrationPattern('missing'), [120, 80, 120]);
});
