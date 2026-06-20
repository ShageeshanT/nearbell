import test from 'node:test';
import assert from 'node:assert/strict';
import { distanceLabel } from '../src/distanceLabel.js';

test('add distance label helper', () => {
  assert.deepEqual(distanceLabel(1200), "1.2 km");
});
