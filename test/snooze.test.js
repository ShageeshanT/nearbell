import test from 'node:test';
import assert from 'node:assert/strict';

test('snooze helper', async () => {
import { createSnoozeUntil, isSnoozed } from '../src/snooze.js';
assert.equal(isSnoozed(2000, createSnoozeUntil(1000,5)), true);
});
