import test from 'node:test';
import assert from 'node:assert/strict';
import { mapsUrlHint } from '../src/mapsUrlHint.js';

test('describes Google Maps URL readiness', () => {
  assert.equal(mapsUrlHint('https://google.com/maps/dir/home/work'), 'Navigation route detected');
  assert.equal(mapsUrlHint('https://google.com/maps'), 'Open a route to start NearBell');
  assert.equal(mapsUrlHint('https://example.com'), 'Open Google Maps to start');
});
