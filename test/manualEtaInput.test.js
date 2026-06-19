import test from 'node:test';
import assert from 'node:assert/strict';
import { parseManualEtaInput } from '../src/manualEtaInput.js';

test('add manual ETA input parser', () => {
  assert.deepEqual(parseManualEtaInput("12 minutes"), 12);
});
