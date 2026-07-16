import test from 'node:test';
import assert from 'node:assert/strict';
import { alertCooldownLabel } from '../src/alertCooldownLabel.js';

test('alertCooldownLabel handles disabled cooldown', () => {
  assert.equal(alertCooldownLabel(), 'Alert cooldown off');
});

test('alertCooldownLabel handles standard cooldown', () => {
  assert.equal(alertCooldownLabel(120), 'Standard alert cooldown');
});
