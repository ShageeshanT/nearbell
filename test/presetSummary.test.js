import test from 'node:test';
import assert from 'node:assert/strict';
import { presetSummary } from '../src/presetSummary.js';

test('add preset summary helper', () => {
  assert.deepEqual(presetSummary({ offsets: [15, 5] }), "15, 5 min alerts");
});
