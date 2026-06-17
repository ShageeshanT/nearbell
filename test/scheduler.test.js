import test from 'node:test';
import assert from 'node:assert/strict';

test('alert scheduler core', async () => {
import { dueAlerts, createAlertMessage } from '../src/scheduler.js';
assert.deepEqual(dueAlerts(16,4,[15,5]), [15,5]);
assert.match(createAlertMessage(5,'Campus'), /Campus/);
});
