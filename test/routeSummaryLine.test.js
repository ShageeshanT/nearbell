import test from 'node:test';
import assert from 'node:assert/strict';
import { routeSummaryLine } from '../src/routeSummaryLine.js';

test('add route summary line helper', () => {
  assert.deepEqual(routeSummaryLine("Driving", "Campus"), "Driving to Campus");
});
