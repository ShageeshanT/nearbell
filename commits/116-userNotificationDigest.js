// Builds a daily digest summary of missed alerts for a user who had notifications off.
function buildDigest(missedAlerts) {
  return {
    count: missedAlerts.length,
    routes: [...new Set(missedAlerts.map(a => a.routeId))],
    generatedAt: Date.now(),
  };
}

module.exports = { buildDigest };
