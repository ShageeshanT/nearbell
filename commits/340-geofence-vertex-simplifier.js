/**
 * Simplifies a geofence polygon by dropping vertices that lie almost on
 * the line between their neighbours (basic Douglas-Peucker style pass).
 */
function simplifyGeofenceVertices(points, toleranceMeters = 2) {
  if (!Array.isArray(points) || points.length < 3) {
    return points || [];
  }

  const kept = [points[0]];

  for (let i = 1; i < points.length - 1; i += 1) {
    const prev = kept[kept.length - 1];
    const curr = points[i];
    const next = points[i + 1];

    const dist = perpendicularDistance(curr, prev, next);
    if (dist > toleranceMeters) {
      kept.push(curr);
    }
  }

  kept.push(points[points.length - 1]);
  return kept;
}

function perpendicularDistance(point, lineStart, lineEnd) {
  const dx = lineEnd.lng - lineStart.lng;
  const dy = lineEnd.lat - lineStart.lat;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;

  const numerator = Math.abs(
    dy * point.lng - dx * point.lat + lineEnd.lng * lineStart.lat - lineEnd.lat * lineStart.lng
  );

  return (numerator / len) * 111000;
}

module.exports = { simplifyGeofenceVertices };
