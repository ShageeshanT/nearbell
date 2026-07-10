import test from 'node:test';
import assert from 'node:assert/strict';
import { manualCheckItem } from '../src/manualCheckItem.js';

test('manualCheckItem covers popup checks', () => {
  assert.equal(manualCheckItem(), 'Open the NearBell popup and confirm presets are visible.');
});

test('manualCheckItem covers Maps checks', () => {
  assert.equal(manualCheckItem('maps'), 'Open a Google Maps route and confirm ETA text is visible.');
});
