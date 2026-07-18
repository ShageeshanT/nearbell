import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationToneLabel } from '../src/notificationToneLabel.js';

test('notificationToneLabel handles balanced tone', () => {
  assert.equal(notificationToneLabel(), 'Balanced notification tone');
});

test('notificationToneLabel handles urgent tone', () => {
  assert.equal(notificationToneLabel('urgent'), 'Urgent notification tone');
});
