import test from 'node:test';
import assert from 'node:assert/strict';
import { buildNotificationTitle } from '../src/notificationTitle.js';

test('add notification title builder', () => {
  assert.deepEqual(buildNotificationTitle("Campus", 5), "5 min to Campus");
});
