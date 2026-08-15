// Flags a cached location fix as stale once it exceeds a max age
export function isStaleFix(fixAtMs, nowMs, maxAgeMs = 20000) {
  return nowMs - fixAtMs > maxAgeMs;
}
