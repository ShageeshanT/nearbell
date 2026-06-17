import test from 'node:test';
import assert from 'node:assert/strict';

test('notification adapter', async () => {
import { buildNotification } from '../src/notifications.js';
assert.match(buildNotification({message:'5 minutes',destination:'Fort'}).message, /Fort/);
});
