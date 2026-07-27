/**
 * Flags a route as delayed once the live ETA drifts past the
 * scheduled ETA by more than the given tolerance.
 */
function isRouteDelayed(scheduledEtaMs, liveEtaMs, toleranceMs = 3 * 60 * 1000) {
  if (!Number.isFinite(scheduledEtaMs) || !Number.isFinite(liveEtaMs)) {
    return false;
  }
  return liveEtaMs - scheduledEtaMs > toleranceMs;
}

function delayMinutes(scheduledEtaMs, liveEtaMs) {
  const diff = liveEtaMs - scheduledEtaMs;
  return Math.max(0, Math.round(diff / 60000));
}

module.exports = { isRouteDelayed, delayMinutes };
