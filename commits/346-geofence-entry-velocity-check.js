/**
 * Rejects a geofence entry event if the implied speed between the last
 * fix and this one is unrealistic, which usually means a GPS glitch
 * teleported the point inside the fence rather than real movement.
 */
function isPlausibleEntry(lastFix, newFix, maxSpeedMps = 40) {
  const distanceMeters = haversineMeters(lastFix, newFix);
  const dtSeconds = Math.max(1, (newFix.timestamp - lastFix.timestamp) / 1000);
  const impliedSpeed = distanceMeters / dtSeconds;

  return impliedSpeed <= maxSpeedMps;
}

function haversineMeters(a, b) {
  const R = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(h));
}

module.exports = { isPlausibleEntry };
