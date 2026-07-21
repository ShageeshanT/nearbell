import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficFlowDescription } from '../src/trafficFlowDescription.js';

test('trafficFlowDescription describes every known tier', () => {
  assert.equal(trafficFlowDescription('clear'), 'Traffic is flowing normally.');
  assert.equal(trafficFlowDescription('light'), 'Light traffic on your route.');
  assert.equal(trafficFlowDescription('moderate'), 'Moderate traffic — expect a few extra minutes.');
  assert.equal(trafficFlowDescription('heavy'), 'Heavy traffic — leave a little earlier.');
  assert.equal(trafficFlowDescription('severe'), 'Severe delays — consider an alternate route.');
});

test('trafficFlowDescription returns null for unknown tier', () => {
  assert.equal(trafficFlowDescription('bogus'), null);
  assert.equal(trafficFlowDescription(null), null);
});