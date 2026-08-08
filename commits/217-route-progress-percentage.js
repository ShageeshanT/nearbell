export function routeProgressPct(distanceCoveredMeters, totalDistanceMeters) {
  if (totalDistanceMeters <= 0) return 0;
  return Math.min(100, (distanceCoveredMeters / totalDistanceMeters) * 100);
}
