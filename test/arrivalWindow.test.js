import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalWindowLabel } from '../src/arrivalWindow.js';

test('add arrival window labels', () => {
  assert.deepEqual(arrivalWindowLabel(10), "getting close");
});
