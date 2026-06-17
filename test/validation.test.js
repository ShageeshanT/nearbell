import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeOffsets, isValidOffset } from '../src/validation.js';

test('alert offset validation', async () => {
assert.deepEqual(normalizeOffsets([5,15,5,'1',-2]), [15,5,1]);
assert.equal(isValidOffset(0), false);
});
