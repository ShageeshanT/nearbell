import test from 'node:test';
import assert from 'node:assert/strict';
import { alertCountLabel } from '../src/alertCountLabel.js';

test('formats alert count labels', () => {
  assert.equal(alertCountLabel(0), 'No alerts set');
  assert.equal(alertCountLabel(1), '1 alert set');
  assert.equal(alertCountLabel(3), '3 alerts set');
});
