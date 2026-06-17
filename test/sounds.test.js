import test from 'node:test';
import assert from 'node:assert/strict';
import { getSoundProfile } from '../src/sounds.js';

test('sound profile catalog', async () => {
assert.equal(getSoundProfile('missing').id, 'soft-bell');
});
