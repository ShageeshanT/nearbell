import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficDelayLabel } from '../src/trafficDelayLabel.js';

test('trafficDelayLabel converts seconds into minute copy', () => {
  assert.equal(trafficDelayLabel(60), '+1 min delay');
  assert.equal(trafficDelayLabel(300), '+5 min delay');
  assert.equal(trafficDelayLabel(1800), '+30 min delay');
});

test('trafficDelayLabel reports no delay for zero', () => {
  assert.equal(trafficDelayLabel(0), 'no delay');
});

test('trafficDelayLabel rounds 45 seconds up to 1 minute', () => {
  assert.equal(trafficDelayLabel(45), '+1 min delay');
});

test('trafficDelayLabel rejects invalid input', () => {
  assert.equal(trafficDelayLabel(null), null);
  assert.equal(trafficDelayLabel(NaN), null);
  assert.equal(trafficDelayLabel(-5), null);
});