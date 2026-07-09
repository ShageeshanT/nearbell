import test from 'node:test';
import assert from 'node:assert/strict';
import { destinationFallback } from '../src/destinationFallback.js';

test('destinationFallback prefers manual input', () => {
  assert.equal(destinationFallback('Campus', 'Mall'), 'Campus');
});

test('destinationFallback uses detected destination', () => {
  assert.equal(destinationFallback('', 'Mall'), 'Mall');
});
