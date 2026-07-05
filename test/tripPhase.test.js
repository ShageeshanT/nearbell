import test from 'node:test';
import assert from 'node:assert/strict';
import { tripPhase } from '../src/tripPhase.js';

test('tripPhase keeps unstarted trips in planning', () => {
  assert.equal(tripPhase({ etaMinutes: 10 }), 'planning');
});

test('tripPhase detects arrival approach', () => {
  assert.equal(tripPhase({ etaMinutes: 4, started: true }), 'arrival');
});
