import test from 'node:test';
import assert from 'node:assert/strict';
import { alertLeadTime } from '../src/alertLeadTime.js';

test('calculates remaining lead time before alert offset', () => {
  assert.equal(alertLeadTime(15, 22), 7);
  assert.equal(alertLeadTime(15, 10), 0);
  assert.equal(alertLeadTime('x', 10), null);
});
