import test from 'node:test';
import assert from 'node:assert/strict';
import { quietHoursLabel } from '../src/quietHoursLabel.js';

test('add quiet hours label helper', () => {
  assert.deepEqual(quietHoursLabel(true), "Quiet hours enabled");
});
