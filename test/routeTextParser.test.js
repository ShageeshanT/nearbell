import test from 'node:test';
import assert from 'node:assert/strict';

test('route text parser', async () => {
import { parseEtaText, parseDistanceText } from '../src/routeTextParser.js';
assert.equal(parseEtaText('15 min'), 15);
assert.equal(parseDistanceText('1.5 km'), 1500);
});
