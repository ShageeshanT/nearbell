import test from 'node:test';
import assert from 'node:assert/strict';
import { destinationInitials } from '../src/destinationInitials.js';

test('add destination initials helper', () => {
  assert.deepEqual(destinationInitials("SLIIT Malabe"), "SM");
});
