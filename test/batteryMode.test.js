import test from 'node:test';
import assert from 'node:assert/strict';
import { batteryMode } from '../src/batteryMode.js';

test('batteryMode conserves at low battery', () => {
  assert.equal(batteryMode(0.1), 'conserve');
});

test('batteryMode stays standard with healthy battery', () => {
  assert.equal(batteryMode(0.8), 'standard');
});
