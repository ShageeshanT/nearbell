import test from 'node:test';
import assert from 'node:assert/strict';
import { trafficAdjustedEtaSeconds } from '../src/trafficAdjustedEtaSeconds.js';

test('trafficAdjustedEtaSeconds scales base ETA by traffic factor', () => {
  assert.equal(trafficAdjustedEtaSeconds(600, 1.0), 600);
  assert.equal(trafficAdjustedEtaSeconds(600, 1.5), 900);
  assert.equal(trafficAdjustedEtaSeconds(600, 2.0), 1200);
});

test('trafficAdjustedEtaSeconds rounds to whole seconds', () => {
  assert.equal(trafficAdjustedEtaSeconds(601, 1.5), 902); // 901.5 -> 902
});

test('trafficAdjustedEtaSeconds returns null for invalid input', () => {
  assert.equal(trafficAdjustedEtaSeconds(null, 1.0), null);
  assert.equal(trafficAdjustedEtaSeconds(600, null), null);
  assert.equal(trafficAdjustedEtaSeconds(NaN, 1.0), null);
  assert.equal(trafficAdjustedEtaSeconds(600, NaN), null);
  assert.equal(trafficAdjustedEtaSeconds(-1, 1.0), null);
  assert.equal(trafficAdjustedEtaSeconds(600, -1), null);
});