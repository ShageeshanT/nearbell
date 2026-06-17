import test from 'node:test';
import assert from 'node:assert/strict';
import * as NearBell from '../src/index.js';
test('public API exposes helpers', () => { assert.equal(typeof NearBell.evaluateSession, 'function'); assert.equal(typeof NearBell.normalizeOffsets, 'function'); });
