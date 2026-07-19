import test from 'node:test';
import assert from 'node:assert/strict';
import { createEtaSampleBuffer } from './06-etaSampleBuffer.js';

test('etaSampleBuffer keeps last N', () => {
  const b = createEtaSampleBuffer(3);
  b.push(10); b.push(12); b.push(11); b.push(9);
  assert.deepEqual(b.values(), [12, 11, 9]);
  assert.equal(b.size(), 3);
});

test('etaSampleBuffer ignores non-finite', () => {
  const b = createEtaSampleBuffer(3);
  b.push(NaN); b.push(null); b.push(7);
  assert.deepEqual(b.values(), [7]);
});