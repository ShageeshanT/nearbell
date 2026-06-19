import test from 'node:test';
import assert from 'node:assert/strict';
import { soundLabel } from '../src/soundLabel.js';

test('add sound label helper', () => {
  assert.deepEqual(soundLabel({}), "Default bell");
});
