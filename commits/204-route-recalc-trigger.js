export function shouldRecalcRoute(offRouteMeters, offRouteSeconds) {
  return offRouteMeters > 100 && offRouteSeconds > 20;
}
