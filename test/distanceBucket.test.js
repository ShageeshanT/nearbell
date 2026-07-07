import test from 'node:test';
import assert from 'node:assert/strict';
import { distanceBucket } from '../src/distanceBucket.js';

test('distanceBucket detects final stretch', () => {
  assert.equal(distanceBucket(0.6), 'final-stretch');
});

test('distanceBucket detects far destinations', () => {
  assert.equal(distanceBucket(12), 'far');
});
