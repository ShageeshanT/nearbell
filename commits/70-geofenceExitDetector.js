// Detects when a tracked device exits a defined geofence radius around a stop.
function hasExitedGeofence(currentDistanceMeters, geofenceRadiusMeters, hysteresisMeters = 15) {
  return currentDistanceMeters > (geofenceRadiusMeters + hysteresisMeters);
}

function buildExitEvent(stopId, distanceMeters) {
  return {
    type: 'geofence_exit',
    stopId,
    distanceMeters,
    timestamp: Date.now(),
  };
}

module.exports = { hasExitedGeofence, buildExitEvent };
