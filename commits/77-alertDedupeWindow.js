// Prevents duplicate alerts for the same stop/route within a short time window.
function isDuplicateAlert(recentAlerts, candidate, windowMs = 60000) {
  const now = Date.now();
  return recentAlerts.some(a =>
    a.stopId === candidate.stopId &&
    a.routeId === candidate.routeId &&
    (now - a.timestamp) < windowMs
  );
}

module.exports = { isDuplicateAlert };
