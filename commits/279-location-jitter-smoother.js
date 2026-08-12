// Averages the last few GPS points to reduce jitter before route matching
export function smoothedPosition(recentPoints) {
  const n = recentPoints.length;
  if (n === 0) return null;
  const lat = recentPoints.reduce((s, p) => s + p.lat, 0) / n;
  const lon = recentPoints.reduce((s, p) => s + p.lon, 0) / n;
  return { lat, lon };
}
