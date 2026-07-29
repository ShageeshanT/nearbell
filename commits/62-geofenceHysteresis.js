/**
 * Adds a hysteresis buffer to geofence checks so a user
 * standing right on the boundary doesn't flicker in/out.
 */
function createHysteresisGeofence(radiusMeters, bufferMeters = 15) {
  let inside = false;

  return {
    update(distanceMeters) {
      const threshold = inside ? radiusMeters + bufferMeters : radiusMeters - bufferMeters;
      inside = distanceMeters <= threshold;
      return inside;
    },
  };
}

module.exports = { createHysteresisGeofence };
