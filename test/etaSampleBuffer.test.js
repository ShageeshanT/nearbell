import test from 'node:test';
import assert from 'node:assert/strict';
import { addEtaSample } from '../src/etaSampleBuffer.js';

test('add ETA sample buffer', () => {
  assert.deepEqual(addEtaSample([1, 2], 3, 2), [2, 3]);
});
