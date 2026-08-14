// Drops points that add negligible directional change to shrink route storage size
export function simplifyPolyline(points, minAngleDeg = 5) {
  if (points.length < 3) return points;
  const kept = [points[0]];
  for (let i = 1; i < points.length - 1; i++) {
    const prev = kept[kept.length - 1];
    const curr = points[i];
    const dx = curr.lon - prev.lon;
    const dy = curr.lat - prev.lat;
    const angle = Math.abs((Math.atan2(dy, dx) * 180) / Math.PI);
    if (angle > minAngleDeg) kept.push(curr);
  }
  kept.push(points[points.length - 1]);
  return kept;
}
