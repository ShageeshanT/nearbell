// Keeps a user-configured geofence radius within safe platform limits
export function clampRadius(radiusMeters, minMeters = 50, maxMeters = 2000) {
  return Math.min(maxMeters, Math.max(minMeters, radiusMeters));
}
