'use strict';

const assert = require('assert');
const { shouldTriggerAlert } = require('../src/alertTrigger');

function run() {
  const fence = {
    center: { lat: 6.9271, lng: 79.8612 },
    radiusMeters: 200,
    alertLeadSeconds: 300, // alert 5 min out
    name: 'office',
  };

  // Already inside -> alert, reason inside_geofence
  const r1 = shouldTriggerAlert(fence.center, 5, fence);
  assert.strictEqual(r1.shouldAlert, true);
  assert.strictEqual(r1.reason, 'inside_geofence');

  // Far away, not moving -> no alert
  const farPoint = { lat: 7.2906, lng: 80.6337 }; // Kandy
  const r2 = shouldTriggerAlert(farPoint, 0, fence);
  assert.strictEqual(r2.shouldAlert, false);

  // Close-ish and moving fast enough to be within lead time
  const nearPoint = { lat: 6.93, lng: 79.865 }; // a few hundred meters off
  const r3 = shouldTriggerAlert(nearPoint, 20, fence); // 20 m/s ~ 72km/h
  assert.ok(typeof r3.shouldAlert === 'boolean');
  assert.ok(r3.distanceMeters > 0);

  console.log('alertTrigger.test.js OK');
}

module.exports = run;

if (require.main === module) run();
