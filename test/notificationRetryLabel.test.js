import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationRetryLabel } from '../src/notificationRetryLabel.js';

test('notificationRetryLabel handles no retries', () => {
  assert.equal(notificationRetryLabel(0), 'No notification retries yet');
});

test('notificationRetryLabel handles plural retries', () => {
  assert.equal(notificationRetryLabel(3), '3 notification retries');
});
