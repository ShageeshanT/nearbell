import test from 'node:test';
import assert from 'node:assert/strict';
import { observerHealthLabel } from '../src/observerHealthLabel.js';

test('observerHealthLabel labels active observer', () => {
  assert.equal(observerHealthLabel('active'), 'Maps observer active');
});

test('observerHealthLabel labels idle observer', () => {
  assert.equal(observerHealthLabel(), 'Maps observer idle');
});
