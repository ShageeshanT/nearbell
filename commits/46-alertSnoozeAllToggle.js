/**
 * Snoozes every active alert at once (e.g. user boards the bus
 * and doesn't need more pings) for a fixed duration.
 */
function snoozeAllAlerts(alerts, durationMs = 20 * 60 * 1000, now = Date.now()) {
  return alerts.map((alert) => ({ ...alert, snoozedUntil: now + durationMs }));
}

module.exports = { snoozeAllAlerts };
