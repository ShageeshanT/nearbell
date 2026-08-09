export function dedupeAlerts(alerts) {
  const seen = new Set();
  return alerts.filter((alert) => {
    const key = `${alert.userId}:${alert.geofenceId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
