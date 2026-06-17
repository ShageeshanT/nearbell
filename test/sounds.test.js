import test from 'node:test';
import assert from 'node:assert/strict';

test('sound profile catalog', async () => {
import { getSoundProfile } from '../src/sounds.js';
assert.equal(getSoundProfile('missing').id, 'soft-bell');
});
