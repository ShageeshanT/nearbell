import test from 'node:test';
import assert from 'node:assert/strict';
import { alertCooldownSeconds } from '../src/alertCooldown.js';

test('alertCooldownSeconds shortens high priority cooldowns', () => {
  assert.equal(alertCooldownSeconds('high'), 60);
});

test('alertCooldownSeconds defaults to normal cooldown', () => {
  assert.equal(alertCooldownSeconds(), 180);
});
