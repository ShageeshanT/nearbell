import test from 'node:test';
import assert from 'node:assert/strict';
import { alertReadiness } from '../src/alertReadiness.js';

test('alertReadiness reports permission blocker first', () => {
  assert.equal(alertReadiness({ permission: 'default', offsets: [5], etaMinutes: 12 }).reason, 'permission');
});

test('alertReadiness reports ready alert count', () => {
  assert.equal(alertReadiness({ permission: 'granted', offsets: [15, 5], etaMinutes: 20 }).copy, '2 alerts ready for this trip.');
});
