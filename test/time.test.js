import test from 'node:test';
import assert from 'node:assert/strict';
import { minutesToMs, msToWholeMinutes, formatEta } from '../src/time.js';

test('eta conversion helpers', async () => {
assert.equal(minutesToMs(2), 120000);
assert.equal(msToWholeMinutes(61000), 2);
assert.equal(formatEta(1), '1 minute');
});
