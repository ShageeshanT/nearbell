import test from 'node:test';
import assert from 'node:assert/strict';
import { formatEtaMinutes } from '../src/etaFormatter.js';

test('add ETA formatter', () => {
  assert.deepEqual(formatEtaMinutes(90), "1 hr 30 min");
});
