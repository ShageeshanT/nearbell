import test from 'node:test';
import assert from 'node:assert/strict';
import { buildNotification } from '../src/notifications.js';

test('notification adapter', async () => {
assert.match(buildNotification({message:'5 minutes',destination:'Fort'}).message, /Fort/);
});
