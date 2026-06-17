import test from 'node:test';
import assert from 'node:assert/strict';

test('default alert presets', async () => {
import { getPreset } from '../src/presets.js';
assert.equal(getPreset('commute').offsetsMinutes[0], 15);
assert.equal(getPreset('missing'), null);
});
