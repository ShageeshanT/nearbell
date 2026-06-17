import test from 'node:test';
import assert from 'node:assert/strict';
import { createSnoozeUntil, isSnoozed } from '../src/snooze.js';

test('snooze helper', async () => {
assert.equal(isSnoozed(2000, createSnoozeUntil(1000,5)), true);
});
