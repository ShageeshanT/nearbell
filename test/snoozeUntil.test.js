import test from 'node:test';
import assert from 'node:assert/strict';
import { snoozeUntilMinutes } from '../src/snoozeUntil.js';

test('add snooze until helper', () => {
  assert.deepEqual(snoozeUntilMinutes(15, 5), 10);
});
