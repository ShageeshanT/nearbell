import test from 'node:test';
import assert from 'node:assert/strict';
import { gpsDriftMeters } from '../src/gpsDrift.js';

test('gpsDriftMeters averages accuracy samples', () => {
  assert.equal(gpsDriftMeters([{ accuracyMeters: 12 }, { accuracyMeters: 18 }]), 15);
});

test('gpsDriftMeters returns zero without samples', () => {
  assert.equal(gpsDriftMeters([]), 0);
});
