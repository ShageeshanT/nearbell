export function pollIntervalMs(distanceToTargetMeters) {
  if (distanceToTargetMeters < 500) return 5000;
  if (distanceToTargetMeters < 2000) return 15000;
  return 60000;
}
