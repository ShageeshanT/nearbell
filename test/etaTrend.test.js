import test from 'node:test';
import assert from 'node:assert/strict';
import { etaTrend } from '../src/etaTrend.js';
test('detects eta trend', () => { assert.equal(etaTrend(10,8), 'approaching'); assert.equal(etaTrend(8,10), 'delayed'); });
