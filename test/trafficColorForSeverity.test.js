import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficColorForSeverity } from '../src/trafficColorForSeverity.js';

test('trafficColorForSeverity maps every known tier', () => {
  assert.equal(trafficColorForSeverity('clear'), '#1f9d55');
  assert.equal(trafficColorForSeverity('light'), '#7cb342');
  assert.equal(trafficColorForSeverity('moderate'), '#f4b400');
  assert.equal(trafficColorForSeverity('heavy'), '#e07a16');
  assert.equal(trafficColorForSeverity('severe'), '#c0392b');
});

test('trafficColorForSeverity returns null for unknown tier', () => {
  assert.equal(trafficColorForSeverity('unknown'), null);
  assert.equal(trafficColorForSeverity(''), null);
  assert.equal(trafficColorForSeverity(null), null);
});