export function isLocationStale(lastUpdateTimestamp, nowTimestamp, maxAgeMs = 45000) {
  return nowTimestamp - lastUpdateTimestamp > maxAgeMs;
}
