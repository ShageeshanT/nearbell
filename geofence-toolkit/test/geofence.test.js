'use strict';

const assert = require('assert');
const { isInsideGeofence, distanceToGeofenceEdge } = require('../src/geofence');

function run() {
  const fence = { center: { lat: 6.9271, lng: 79.8612 }, radiusMeters: 500, name: 'home' };

  // Point exactly at center -> inside, edge distance strongly negative
  assert.strictEqual(isInsideGeofence(fence.center, fence), true);
  assert.ok(distanceToGeofenceEdge(fence.center, fence) < 0);

  // A point far away (Kandy) -> outside
  const kandy = { lat: 7.2906, lng: 80.6337 };
  assert.strictEqual(isInsideGeofence(kandy, fence), false);
  assert.ok(distanceToGeofenceEdge(kandy, fence) > 0);

  console.log('geofence.test.js OK');
}

module.exports = run;

if (require.main === module) run();
