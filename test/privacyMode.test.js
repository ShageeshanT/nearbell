import test from 'node:test';
import assert from 'node:assert/strict';
import { redactDestination } from '../src/privacyMode.js';

test('add privacy destination redaction', () => {
  assert.deepEqual(redactDestination("Home", true), "Saved destination");
});
