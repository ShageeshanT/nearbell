'use strict';

const assert = require('assert');
const { evaluateAll, nearestGeofence, activeAlerts } = require('../src/multiGeofence');

function run() {
  const fences = [
    { name: 'home', center: { lat: 6.9271, lng: 79.8612 }, radiusMeters: 100, alertLeadSeconds: 60 },
    { name: 'office', center: { lat: 6.9147, lng: 79.8730 }, radiusMeters: 100, alertLeadSeconds: 60 },
    { name: 'gym', center: { lat: 6.85, lng: 79.9 }, radiusMeters: 100, alertLeadSeconds: 60 },
  ];

  const point = { lat: 6.9271, lng: 79.8612 }; // exactly at "home"

  const evaluations = evaluateAll(point, 3, fences);
  assert.strictEqual(evaluations.length, 3);
  const homeEval = evaluations.find((e) => e.fence.name === 'home');
  assert.strictEqual(homeEval.shouldAlert, true);

  const nearest = nearestGeofence(point, fences);
  assert.strictEqual(nearest.fence.name, 'home');
  assert.ok(nearest.distanceMeters < 1);

  const alerts = activeAlerts(evaluations);
  assert.strictEqual(alerts.length, 1);
  assert.strictEqual(alerts[0].fence.name, 'home');

  // Empty fence list -> nearestGeofence returns null, no throw
  assert.strictEqual(nearestGeofence(point, []), null);

  console.log('multiGeofence.test.js OK');
}

module.exports = run;

if (require.main === module) run();
