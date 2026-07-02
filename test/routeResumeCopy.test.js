import test from 'node:test';
import assert from 'node:assert/strict';
import { routeResumeCopy } from '../src/routeResumeCopy.js';

test('formats route resume copy', () => {
  assert.equal(routeResumeCopy(true), 'Resume arrival alerts');
  assert.equal(routeResumeCopy(false), 'Arrival alerts running');
});
