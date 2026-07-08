import test from 'node:test';
import assert from 'node:assert/strict';
import { alertCopy } from '../src/alertCopy.js';

test('alertCopy creates near arrival copy', () => {
  assert.equal(alertCopy('SLIIT', 1), 'SLIIT is almost here.');
});

test('alertCopy includes ETA copy', () => {
  assert.equal(alertCopy('SLIIT', 7), 'SLIIT is about 7 minutes away.');
});
