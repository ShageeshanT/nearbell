import test from 'node:test';
import assert from 'node:assert/strict';
import { destinationHint } from '../src/destinationHint.js';

test('formats destination hint copy', () => {
  assert.equal(destinationHint('Campus'), 'Heading to Campus');
  assert.equal(destinationHint('  '), 'Pick a destination to start alerts');
});
