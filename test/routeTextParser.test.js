import test from 'node:test';
import assert from 'node:assert/strict';
import { parseEtaText, parseDistanceText } from '../src/routeTextParser.js';

test('route text parser', async () => {
assert.equal(parseEtaText('15 min'), 15);
assert.equal(parseDistanceText('1.5 km'), 1500);
});
