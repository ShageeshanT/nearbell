import test from 'node:test';
import assert from 'node:assert/strict';
import { etaTextParser } from '../src/etaTextParser.js';

test('etaTextParser reads minute text', () => {
  assert.equal(etaTextParser('Arrive in 12 min'), 12);
});

test('etaTextParser returns null for missing ETA', () => {
  assert.equal(etaTextParser('No route yet'), null);
});
