import test from 'node:test';
import assert from 'node:assert/strict';
import { routeConfidenceCopy } from '../src/routeConfidenceCopy.js';

test('formats route confidence copy', () => {
  assert.equal(routeConfidenceCopy(0.9), 'High confidence ETA');
  assert.equal(routeConfidenceCopy(0.6), 'Medium confidence ETA');
  assert.equal(routeConfidenceCopy(0.2), 'Low confidence ETA');
});
