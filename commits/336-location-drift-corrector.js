// Snaps a slightly-off position back onto the route line when drift is small
export function correctDrift(rawPosition, nearestRoutePoint, driftMeters, snapThreshold = 15) {
  return driftMeters <= snapThreshold ? nearestRoutePoint : rawPosition;
}
