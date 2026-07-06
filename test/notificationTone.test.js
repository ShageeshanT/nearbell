import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationTone } from '../src/notificationTone.js';

test('notificationTone uses persistent tone for critical alerts', () => {
  assert.equal(notificationTone('critical'), 'persistent');
});

test('notificationTone defaults to balanced', () => {
  assert.equal(notificationTone(), 'balanced');
});
