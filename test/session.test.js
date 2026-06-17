import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, markFired } from '../src/session.js';

test('session state machine', async () => {
const s = createSession('a', {etaMinutes:20,destination:'Home'});
assert.deepEqual(markFired(s,[15,15]).firedOffsets, [15]);
});
