// Computes a static free-flow baseline ETA to compare live ETA against
export function baselineEta(distanceKm, freeFlowSpeedKmh) {
  if (freeFlowSpeedKmh <= 0) return null;
  return Math.round((distanceKm / freeFlowSpeedKmh) * 60);
}
