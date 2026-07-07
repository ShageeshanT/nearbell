import test from 'node:test';
import assert from 'node:assert/strict';
import { alertPriority } from '../src/alertPriority.js';

test('alertPriority raises critical for near confident alerts', () => {
  assert.equal(alertPriority({ etaMinutes: 3, confidence: 0.9 }), 'critical');
});

test('alertPriority keeps distant alerts normal', () => {
  assert.equal(alertPriority({ etaMinutes: 25, confidence: 0.9 }), 'normal');
});
