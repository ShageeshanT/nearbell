import test from 'node:test';
import assert from 'node:assert/strict';
import { tripSummaryLine } from '../src/tripSummary.js';

test('tripSummaryLine includes ETA when available', () => {
  assert.equal(tripSummaryLine({ destination: 'Campus', etaMinutes: 12 }), 'Tracking Campus, 12 min away.');
});

test('tripSummaryLine handles missing ETA', () => {
  assert.equal(tripSummaryLine({ destination: 'Campus' }), 'Tracking route to Campus.');
});
