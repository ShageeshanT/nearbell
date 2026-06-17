import test from 'node:test';
import assert from 'node:assert/strict';
import { isWithinQuietHours } from '../src/quietHours.js';

test('quiet hours helper', async () => {
assert.equal(isWithinQuietHours(new Date('2026-01-01T23:00:00'), {startHour:22,endHour:6}), true);
});
