/**
 * Tracks enter/exit transitions across a geofence boundary,
 * emitting an event only on state change (not every sample).
 */
function createGeofenceTracker() {
  let inside = false;

  return {
    update(isInsideNow) {
      if (isInsideNow === inside) return null;
      inside = isInsideNow;
      return inside ? 'enter' : 'exit';
    },
  };
}

module.exports = { createGeofenceTracker };
