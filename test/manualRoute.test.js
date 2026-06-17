import test from 'node:test';
import assert from 'node:assert/strict';
import { createManualRoute, updateManualEta } from '../src/manualRoute.js';

test('manual route override model', async () => {
const route = createManualRoute({destination:'SLIIT', etaMinutes:20});
assert.equal(updateManualEta(route,10).etaMinutes, 10);
});
