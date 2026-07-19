import test from 'node:test';
import assert from 'node:assert/strict';
import { createAlertDeduper } from './05-alertDeduper.js';

test('alertDeduper drops repeated text', () => {
  const d = createAlertDeduper(3);
  assert.equal(d('Approaching SLIIT in 5 min'), false);
  assert.equal(d('Approaching SLIIT in 5 min'), true);
  assert.equal(d('SLIIT 5 min away'), false);
});

test('alertDeduper rotates window', () => {
  const d = createAlertDeduper(2);
  assert.equal(d('a'), false);
  assert.equal(d('b'), false);
  assert.equal(d('c'), false);
  assert.equal(d('a'), false);
});