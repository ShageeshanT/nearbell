'use strict';

const assert = require('assert');
const { loadGeofencesFromString } = require('../src/configLoader');

function run() {
  const good = JSON.stringify({
    geofences: [
      { name: 'home', center: { lat: 6.9271, lng: 79.8612 }, radiusMeters: 150 },
    ],
  });
  const loaded = loadGeofencesFromString(good);
  assert.strictEqual(loaded.length, 1);
  assert.strictEqual(loaded[0].name, 'home');

  // Bad radius should throw
  const bad = JSON.stringify([{ name: 'x', center: { lat: 0, lng: 0 }, radiusMeters: -5 }]);
  assert.throws(() => loadGeofencesFromString(bad));

  // Bad lat should throw
  const badLat = JSON.stringify([{ name: 'x', center: { lat: 200, lng: 0 }, radiusMeters: 10 }]);
  assert.throws(() => loadGeofencesFromString(badLat));

  console.log('configLoader.test.js OK');
}

module.exports = run;

if (require.main === module) run();
