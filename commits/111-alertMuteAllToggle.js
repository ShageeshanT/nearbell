// Handles a global mute-all-alerts toggle with an optional expiry.
function muteAll(durationMinutes) {
  return durationMinutes ? { until: Date.now() + durationMinutes * 60000 } : { until: null };
}

function isMuted(muteState) {
  if (!muteState) return false;
  return muteState.until === null || Date.now() < muteState.until;
}

module.exports = { muteAll, isMuted };
