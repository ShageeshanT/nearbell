import test from 'node:test';
import assert from 'node:assert/strict';
import { alertDueLabel } from '../src/alertDueLabel.js';

test('alertDueLabel handles singular minute', () => {
  assert.equal(alertDueLabel(1), '1 minute before arrival');
});

test('alertDueLabel handles plural minutes', () => {
  assert.equal(alertDueLabel(15), '15 minutes before arrival');
});
