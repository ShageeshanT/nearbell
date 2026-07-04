import test from 'node:test';
import assert from 'node:assert/strict';
import { routeTrustScore } from '../src/routeTrust.js';

test('routeTrustScore trusts fresh map routes', () => {
  assert.equal(routeTrustScore({ ageSeconds: 30 }), 100);
});

test('routeTrustScore penalizes stale manual stationary routes', () => {
  assert.equal(routeTrustScore({ ageSeconds: 400, source: 'manual', moving: false }), 30);
});
