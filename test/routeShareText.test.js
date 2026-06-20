import test from 'node:test';
import assert from 'node:assert/strict';
import { routeShareText } from '../src/routeShareText.js';

test('add route share text helper', () => {
  assert.deepEqual(routeShareText("Campus", 12), "Heading to Campus, about 12 min away");
});
