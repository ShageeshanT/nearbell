import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficSeverityTier } from '../src/trafficSeverityTier.js';

test('trafficSeverityTier buckets delays correctly', () => {
  assert.equal(trafficSeverityTier(0), 'clear');
  assert.equal(trafficSeverityTier(60), 'light');
  assert.equal(trafficSeverityTier(299), 'light');
  assert.equal(trafficSeverityTier(300), 'moderate');
  assert.equal(trafficSeverityTier(899), 'moderate');
  assert.equal(trafficSeverityTier(900), 'heavy');
  assert.equal(trafficSeverityTier(1799), 'heavy');
  assert.equal(trafficSeverityTier(1800), 'severe');
  assert.equal(trafficSeverityTier(7200), 'severe');
});

test('trafficSeverityTier rejects invalid input', () => {
  assert.equal(trafficSeverityTier(null), null);
  assert.equal(trafficSeverityTier(NaN), null);
  assert.equal(trafficSeverityTier(-1), null);
});