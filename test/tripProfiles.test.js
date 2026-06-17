import test from 'node:test';
import assert from 'node:assert/strict';

test('trip profile model', async () => {
import { getTripProfile } from '../src/tripProfiles.js';
assert.equal(getTripProfile('train').label, 'Train ride');
assert.equal(getTripProfile('spaceship').label, 'Bus ride');
});
