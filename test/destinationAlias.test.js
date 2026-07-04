import test from 'node:test';
import assert from 'node:assert/strict';
import { destinationAlias } from '../src/destinationAlias.js';

test('destinationAlias uses the first address segment', () => {
  assert.equal(destinationAlias('SLIIT Malabe, New Kandy Road'), 'SLIIT Malabe');
});

test('destinationAlias falls back for blank input', () => {
  assert.equal(destinationAlias('  '), 'Destination');
});
