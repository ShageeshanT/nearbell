'use strict';

const METERS_PER_KM = 1000;
const METERS_PER_MILE = 1609.344;

function metersToKm(m) {
  return m / METERS_PER_KM;
}

function metersToMiles(m) {
  return m / METERS_PER_MILE;
}

function kmToMeters(km) {
  return km * METERS_PER_KM;
}

function milesToMeters(mi) {
  return mi * METERS_PER_MILE;
}

/**
 * Format a meter distance as a short human string, e.g. "350 m" or "4.2 km".
 */
function formatDistance(meters, unit = 'metric') {
  if (unit === 'imperial') {
    const mi = metersToMiles(meters);
    return mi < 0.1 ? `${Math.round(meters * 3.28084)} ft` : `${mi.toFixed(1)} mi`;
  }
  return meters < 1000 ? `${Math.round(meters)} m` : `${metersToKm(meters).toFixed(1)} km`;
}

module.exports = {
  METERS_PER_KM,
  METERS_PER_MILE,
  metersToKm,
  metersToMiles,
  kmToMeters,
  milesToMeters,
  formatDistance,
};
