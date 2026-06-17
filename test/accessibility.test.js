import test from 'node:test';
import assert from 'node:assert/strict';

test('accessibility copy helpers', async () => {
import { alertAriaLabel, settingsSummary } from '../src/accessibility.js';
assert.match(alertAriaLabel(5,'Home'), /5 minutes/);
assert.match(settingsSummary([15,5]), /15, 5/);
});
