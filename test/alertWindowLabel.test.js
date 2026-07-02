import test from 'node:test';
import assert from 'node:assert/strict';
import { alertWindowLabel } from '../src/alertWindowLabel.js';

test('formats alert window labels', () => {
  assert.equal(alertWindowLabel(0), 'at arrival');
  assert.equal(alertWindowLabel(1), '1 min before arrival');
  assert.equal(alertWindowLabel(15), '15 mins before arrival');
});
