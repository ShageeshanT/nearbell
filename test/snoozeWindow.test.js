import test from 'node:test';
import assert from 'node:assert/strict';
import { snoozeWindowMinutes } from '../src/snoozeWindow.js';

test('snoozeWindowMinutes clamps low values', () => {
  assert.equal(snoozeWindowMinutes(0), 1);
});

test('snoozeWindowMinutes clamps high values', () => {
  assert.equal(snoozeWindowMinutes(45), 30);
});
