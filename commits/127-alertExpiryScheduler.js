// Schedules automatic expiry/cleanup of alerts that are no longer relevant.
function isExpired(alert, nowMs = Date.now()) {
  return alert.expiresAt != null && nowMs > alert.expiresAt;
}

function pruneExpired(alerts, nowMs = Date.now()) {
  return alerts.filter(a => !isExpired(a, nowMs));
}

module.exports = { isExpired, pruneExpired };
