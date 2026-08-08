export function isOffRoute(distanceFromPathMeters, toleranceMeters = 75) {
  return distanceFromPathMeters > toleranceMeters;
}
