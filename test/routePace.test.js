import test from 'node:test';
import assert from 'node:assert/strict';
import { routePace } from '../src/routePace.js';

test('classifies route pace from ETA delta', () => {
  assert.equal(routePace(0.4), 'steady');
  assert.equal(routePace(3), 'slowing');
  assert.equal(routePace(-2), 'faster');
});
