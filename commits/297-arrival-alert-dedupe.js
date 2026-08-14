// Prevents firing the same arrival alert twice for the same stop within a trip
export function shouldFire(firedStopIds, stopId) {
  return !firedStopIds.has(stopId);
}
