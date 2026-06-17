import test from 'node:test';
import assert from 'node:assert/strict';
import { getTripProfile } from '../src/tripProfiles.js';

test('trip profile model', async () => {
assert.equal(getTripProfile('train').label, 'Train ride');
assert.equal(getTripProfile('spaceship').label, 'Bus ride');
});
