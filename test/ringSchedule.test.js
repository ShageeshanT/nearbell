import test from 'node:test';
import assert from 'node:assert/strict';
import { ringSchedule } from '../src/ringSchedule.js';

test('ringSchedule sorts thresholds from far to near', () => {
  assert.deepEqual(ringSchedule([5, 15, 1]), [15, 5, 1]);
});

test('ringSchedule filters invalid thresholds', () => {
  assert.deepEqual(ringSchedule([0, 'x', 10]), [10]);
});
