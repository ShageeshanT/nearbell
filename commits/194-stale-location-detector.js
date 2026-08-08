export function isLocationStale(lastFixMs, nowMs = Date.now(), maxAgeMs = 45000) {
  return nowMs - lastFixMs > maxAgeMs;
}
