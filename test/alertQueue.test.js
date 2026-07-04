import test from 'node:test';
import assert from 'node:assert/strict';
import { nextQueuedAlert } from '../src/alertQueue.js';

test('nextQueuedAlert returns the next reachable offset', () => {
  assert.equal(nextQueuedAlert([30, 15, 5], 18), 15);
});

test('nextQueuedAlert returns null without valid alerts', () => {
  assert.equal(nextQueuedAlert([30], 10), null);
});
