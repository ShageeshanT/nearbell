import test from 'node:test';
import assert from 'node:assert/strict';
import { buildAlertPlan } from '../src/alertPlan.js';

test('add alert plan builder', () => {
  assert.deepEqual(buildAlertPlan([5, 15, 5]), [{ minutes: 15, fired: false }, { minutes: 5, fired: false }]);
});
