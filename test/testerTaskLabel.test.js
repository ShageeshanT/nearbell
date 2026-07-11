import test from 'node:test';
import assert from 'node:assert/strict';
import { testerTaskLabel } from '../src/testerTaskLabel.js';

test('testerTaskLabel describes install task', () => {
  assert.equal(testerTaskLabel(), 'Install the unpacked extension build');
});

test('testerTaskLabel describes route task', () => {
  assert.equal(testerTaskLabel('route'), 'Start a route and watch the ETA');
});
