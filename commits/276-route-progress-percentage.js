// Computes percent of the route completed based on distance traveled
export function routeProgressPct(distanceTraveledMeters, totalRouteMeters) {
  if (totalRouteMeters <= 0) return 0;
  return Math.min(100, Math.round((distanceTraveledMeters / totalRouteMeters) * 100));
}
