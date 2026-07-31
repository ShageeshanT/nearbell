// Detects when a device enters a geofence radius around a stop, for arrival alerts.
function hasEnteredGeofence(currentDistanceMeters, geofenceRadiusMeters) {
  return currentDistanceMeters <= geofenceRadiusMeters;
}

module.exports = { hasEnteredGeofence };
