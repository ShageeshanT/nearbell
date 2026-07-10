import test from 'node:test';
import assert from 'node:assert/strict';
import { alertPresetSummary } from '../src/alertPresetSummary.js';

test('alertPresetSummary handles empty presets', () => {
  assert.equal(alertPresetSummary([]), 'No arrival alerts configured');
});

test('alertPresetSummary sorts presets clearly', () => {
  assert.equal(alertPresetSummary([5, 15]), '15, 5 minutes before arrival');
});
