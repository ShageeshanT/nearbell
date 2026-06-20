import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationBody } from '../src/notificationBody.js';

test('add notification body helper', () => {
  assert.deepEqual(notificationBody("Campus", "Almost there"), "Almost there near Campus");
});
