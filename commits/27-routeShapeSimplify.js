/**
 * Simplifies a dense polyline of route points by dropping
 * points too close to their neighbor, for lighter map rendering.
 */
function simplifyRouteShape(points, minGapMeters, distanceFn) {
  if (points.length <= 2) return points;

  const simplified = [points[0]];
  for (let i = 1; i < points.length; i += 1) {
    const last = simplified[simplified.length - 1];
    if (distanceFn(last, points[i]) >= minGapMeters) {
      simplified.push(points[i]);
    }
  }
  simplified.push(points[points.length - 1]);
  return simplified;
}

module.exports = { simplifyRouteShape };
