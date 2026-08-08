export function shouldSnapToWaypoint(distanceMeters, toleranceMeters = 20) {
  return distanceMeters <= toleranceMeters;
}
