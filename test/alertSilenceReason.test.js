import test from 'node:test';
import assert from 'node:assert/strict';
import { alertSilenceReason } from '../src/alertSilenceReason.js';

test('alertSilenceReason returns null when alerts can fire', () => {
  assert.equal(alertSilenceReason(), null);
});

test('alertSilenceReason prioritizes muted state', () => {
  assert.equal(alertSilenceReason({ muted: true, quietHours: true }), 'muted');
});
