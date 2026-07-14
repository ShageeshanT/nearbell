import test from 'node:test';
import assert from 'node:assert/strict';
import { alertWindowLabel } from '../src/alertWindowLabel.js';

test('alertWindowLabel handles missing windows', () => {
  assert.equal(alertWindowLabel(), 'No alert window selected');
});

test('alertWindowLabel handles final warnings', () => {
  assert.equal(alertWindowLabel(5), 'Final arrival warning');
});
