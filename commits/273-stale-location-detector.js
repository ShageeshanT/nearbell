// Flags a location fix as stale if it hasn't updated within the expected interval
export function isStaleLocation(lastFixMs, nowMs, maxAgeMs = 30000) {
  return nowMs - lastFixMs > maxAgeMs;
}
