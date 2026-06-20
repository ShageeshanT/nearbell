import test from 'node:test';
import assert from 'node:assert/strict';
import { offsetLabel } from '../src/offsetLabel.js';

test('add offset label helper', () => {
  assert.deepEqual(offsetLabel(15), "15 minute alert");
});
