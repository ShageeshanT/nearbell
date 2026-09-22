/**
 * Reconciles a live, tracking-based ETA with the scheduled ETA, preferring
 * live data when it's fresh and falling back to schedule otherwise.
 */
function reconcileEta(liveEta, scheduledEta, liveAgeMs, maxLiveAgeMs = 90000) {
  if (liveEta != null && liveAgeMs <= maxLiveAgeMs) {
    return { etaSeconds: liveEta, source: 'live' };
  }

  return { etaSeconds: scheduledEta, source: 'schedule' };
}

module.exports = { reconcileEta };
