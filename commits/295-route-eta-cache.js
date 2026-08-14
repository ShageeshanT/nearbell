// Simple TTL cache to avoid recomputing ETA for near-identical positions
export function getCachedEta(cache, key, nowMs, ttlMs = 10000) {
  const hit = cache[key];
  if (hit && nowMs - hit.atMs < ttlMs) return hit.eta;
  return null;
}
