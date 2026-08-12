// Flags when current position has drifted too far from the planned route
export function isOffRoute(distanceFromRouteMeters, thresholdMeters = 75) {
  return distanceFromRouteMeters > thresholdMeters;
}
