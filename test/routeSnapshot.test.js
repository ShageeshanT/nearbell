import test from 'node:test';
import assert from 'node:assert/strict';
import { routeSnapshotStatus } from '../src/routeSnapshot.js';

test('routeSnapshotStatus detects near arrival', () => {
  assert.equal(routeSnapshotStatus({ etaMinutes: 4, distanceKm: 2 }), 'near-arrival');
});

test('routeSnapshotStatus handles incomplete snapshots', () => {
  assert.equal(routeSnapshotStatus({ etaMinutes: 12 }), 'incomplete');
});
