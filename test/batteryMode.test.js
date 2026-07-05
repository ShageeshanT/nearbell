import test from 'node:test';
import assert from 'node:assert/strict';
import { batteryMode } from '../src/batteryMode.js';

test('batteryMode uses normal mode for healthy battery', () => {
  assert.equal(batteryMode(80), 'normal');
});

test('batteryMode detects critical battery', () => {
  assert.equal(batteryMode(10), 'critical-saving');
});
