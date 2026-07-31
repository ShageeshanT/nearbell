// Merges overlapping service alerts (e.g. delay + detour) into a single combined message.
function mergeServiceAlerts(alerts) {
  if (alerts.length === 0) return null;
  return {
    routeId: alerts[0].routeId,
    messages: alerts.map(a => a.message),
    severity: alerts.reduce((max, a) => Math.max(max, a.severity || 0), 0),
  };
}

module.exports = { mergeServiceAlerts };
