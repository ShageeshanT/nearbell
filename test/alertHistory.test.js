import test from 'node:test';
import assert from 'node:assert/strict';
import { addAlertHistory, clearAlertHistory } from '../src/alertHistory.js';
test('limits alert history', () => { assert.equal(addAlertHistory([1,2], 3, 2).length, 2); assert.deepEqual(clearAlertHistory(), []); });
