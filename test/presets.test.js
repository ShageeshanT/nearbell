import test from 'node:test';
import assert from 'node:assert/strict';
import { getPreset } from '../src/presets.js';

test('default alert presets', async () => {
assert.equal(getPreset('commute').offsetsMinutes[0], 15);
assert.equal(getPreset('missing'), null);
});
