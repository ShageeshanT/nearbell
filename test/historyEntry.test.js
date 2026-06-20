import test from 'node:test';
import assert from 'node:assert/strict';
import { createHistoryEntry } from '../src/historyEntry.js';

test('add alert history entry helper', () => {
  assert.deepEqual(createHistoryEntry("Home", 5), { destination: "Home", minutes: 5, type: "arrival-alert" });
});
