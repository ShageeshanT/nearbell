import test from 'node:test';
import assert from 'node:assert/strict';
import { isWithinMinuteWindow } from '../src/minuteWindow.js';

test('add minute window helper', () => {
  assert.deepEqual(isWithinMinuteWindow(5.2, 5), true);
});
