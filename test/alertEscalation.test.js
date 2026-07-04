import test from 'node:test';
import assert from 'node:assert/strict';
import { alertEscalationLevel } from '../src/alertEscalation.js';

test('alertEscalationLevel keeps calm sessions normal', () => {
  assert.equal(alertEscalationLevel({ etaMinutes: 18 }), 'normal');
});

test('alertEscalationLevel marks denied permissions critical', () => {
  assert.equal(alertEscalationLevel({ etaMinutes: 18, permission: 'denied' }), 'critical');
});
