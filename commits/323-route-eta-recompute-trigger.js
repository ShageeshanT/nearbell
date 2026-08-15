// Decides whether enough drift has occurred to justify a fresh ETA recompute
export function shouldRecompute(distanceOffRouteMeters, threshold = 100) {
  return distanceOffRouteMeters > threshold;
}
