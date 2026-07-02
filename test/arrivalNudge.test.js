import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalNudge } from '../src/arrivalNudge.js';

test('selects arrival nudge copy by ETA', () => {
  assert.equal(arrivalNudge(3), 'Get ready to arrive.');
  assert.equal(arrivalNudge(10), 'You are getting close.');
  assert.equal(arrivalNudge(30), 'NearBell is watching the ETA.');
});
