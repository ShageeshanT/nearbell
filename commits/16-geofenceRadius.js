/**
 * Checks whether a point falls within a circular geofence
 * around a stop, using the Haversine distance formula.
 */
function isWithinGeofence(point, center, radiusMeters) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(center.lat - point.lat);
  const dLng = toRad(center.lng - point.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(point.lat)) * Math.cos(toRad(center.lat)) * Math.sin(dLng / 2) ** 2;
  const distance = 2 * R * Math.asin(Math.sqrt(a));

  return distance <= radiusMeters;
}

module.exports = { isWithinGeofence };
