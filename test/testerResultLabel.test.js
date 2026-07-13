import test from 'node:test';
import assert from 'node:assert/strict';
import { testerResultLabel } from '../src/testerResultLabel.js';

test('testerResultLabel handles pending result', () => {
  assert.equal(testerResultLabel(), 'Tester result pending');
});

test('testerResultLabel handles passing result', () => {
  assert.equal(testerResultLabel('pass'), 'Tester passed the route alert check');
});
