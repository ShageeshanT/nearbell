export function isRouteDeviating(plannedPathMeters, actualPathMeters, toleranceMeters = 150) {
  return Math.abs(actualPathMeters - plannedPathMeters) > toleranceMeters;
}
