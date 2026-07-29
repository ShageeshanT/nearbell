/**
 * Groups pending notifications by route id so the OS shows a
 * single collapsed group instead of a flood of separate alerts.
 */
function groupNotificationsByRoute(notifications) {
  const groups = new Map();
  for (const n of notifications) {
    if (!groups.has(n.routeId)) groups.set(n.routeId, []);
    groups.get(n.routeId).push(n);
  }
  return groups;
}

module.exports = { groupNotificationsByRoute };
