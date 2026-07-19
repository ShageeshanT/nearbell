import test from 'node:test';
import assert from 'node:assert/strict';
import { createRouteSnapshot } from './01-createRouteSnapshot.js';

test('createRouteSnapshot near-arrival', () => {
  const snap = createRouteSnapshot({ destination: 'SLIIT', etaMinutes: 4, distanceKm: 0.5 });
  assert.equal(snap.status, 'near-arrival');
  assert.equal(snap.destination, 'SLIIT');
  assert.equal(snap.etaMinutes, 4);
});

test('createRouteSnapshot tracking', () => {
  const snap = createRouteSnapshot({ destination: 'Fort', etaMinutes: 25, distanceKm: 12 });
  assert.equal(snap.status, 'tracking');
});

test('createRouteSnapshot incomplete on bad input', () => {
  const snap = createRouteSnapshot({ destination: 'X', etaMinutes: 'soon', distanceKm: null });
  assert.equal(snap.status, 'incomplete');
  assert.equal(snap.etaMinutes, null);
});