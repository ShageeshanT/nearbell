import test from 'node:test';
import assert from 'node:assert/strict';
import { minutesFromSeconds } from '../src/minutesFromSeconds.js';

test('add seconds to minutes helper', () => {
  assert.deepEqual(minutesFromSeconds(121), 3);
});
