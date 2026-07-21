import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficIsWorseThan } from '../src/trafficIsWorseThan.js';

test('trafficIsWorseThan returns true when current is more severe', () => {
  assert.equal(trafficIsWorseThan('clear', 'moderate'), true);
  assert.equal(trafficIsWorseThan('light', 'heavy'), true);
  assert.equal(trafficIsWorseThan('heavy', 'severe'), true);
});

test('trafficIsWorseThan returns false for unchanged or better', () => {
  assert.equal(trafficIsWorseThan('clear', 'clear'), false);
  assert.equal(trafficIsWorseThan('heavy', 'moderate'), false);
  assert.equal(trafficIsWorseThan('severe', 'light'), false);
});

test('trafficIsWorseThan returns null for unknown tiers', () => {
  assert.equal(trafficIsWorseThan('bogus', 'clear'), null);
  assert.equal(trafficIsWorseThan('clear', 'bogus'), null);
});