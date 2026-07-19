import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalBuffer } from './11-arrivalBuffer.js';
import { alertToneLabel } from './12-alertToneLabel.js';

test('arrivalBuffer subtracts pad', () => {
  assert.equal(arrivalBuffer(300, 90), 210);
});

test('arrivalBuffer clamps at zero', () => {
  assert.equal(arrivalBuffer(30, 90), 0);
});

test('alertToneLabel escalation', () => {
  assert.equal(alertToneLabel({ minutes: 1, distanceKm: 2 }), 'critical');
  assert.equal(alertToneLabel({ minutes: 4, distanceKm: 0.8 }), 'urgent');
  assert.equal(alertToneLabel({ minutes: 10, distanceKm: 3 }), 'heads-up');
  assert.equal(alertToneLabel({ minutes: 30, distanceKm: 20 }), 'ambient');
});