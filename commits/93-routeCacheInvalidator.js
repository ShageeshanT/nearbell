// Decides when a cached route shape/schedule should be refetched.
function isCacheStale(cachedAtMs, maxAgeMs = 15 * 60 * 1000) {
  return Date.now() - cachedAtMs > maxAgeMs;
}

module.exports = { isCacheStale };
