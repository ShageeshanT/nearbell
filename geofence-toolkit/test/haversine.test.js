'use strict';

const assert = require('assert');
const { haversineDistance } = require('../src/haversine');

function run() {
  // Same point -> 0 distance
  const p = { lat: 6.9271, lng: 79.8612 }; // Colombo
  assert.strictEqual(Math.round(haversineDistance(p, p)), 0);

  // Colombo to Kandy, roughly ~95km great-circle
  const kandy = { lat: 7.2906, lng: 80.6337 };
  const distKm = haversineDistance(p, kandy) / 1000;
  assert.ok(distKm > 90 && distKm < 100, `expected ~90-100km, got ${distKm}`);

  console.log('haversine.test.js OK');
}

module.exports = run;

if (require.main === module) run();
