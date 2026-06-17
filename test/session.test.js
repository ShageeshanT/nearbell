import test from 'node:test';
import assert from 'node:assert/strict';

test('session state machine', async () => {
import { createSession, markFired } from '../src/session.js';
const s = createSession('a', {etaMinutes:20,destination:'Home'});
assert.deepEqual(markFired(s,[15,15]).firedOffsets, [15]);
});
