import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateSession } from '../src/engine.js';

test('alert engine', async () => {
const r = evaluateSession({lastEtaMinutes:16,firedOffsets:[],destination:'Home'}, {etaMinutes:4,destination:'Home'}, [15,5]);
assert.equal(r.alerts.length, 2);
});
