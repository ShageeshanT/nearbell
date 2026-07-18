import test from 'node:test';
import assert from 'node:assert/strict';
import { routeSignalLabel } from '../src/routeSignalLabel.js';

test('routeSignalLabel handles stable signal', () => {
  assert.equal(routeSignalLabel(), 'Route signal stable');
});

test('routeSignalLabel handles lost signal', () => {
  assert.equal(routeSignalLabel('lost'), 'Route signal lost');
});
