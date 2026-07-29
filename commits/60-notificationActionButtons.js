/**
 * Builds the quick-action buttons attached to an arrival
 * notification (snooze, mute route, view map).
 */
function buildNotificationActions(alert) {
  return [
    { id: 'snooze', label: 'Snooze 20 min' },
    { id: 'mute_route', label: `Mute ${alert.routeName}` },
    { id: 'view_map', label: 'View on map' },
  ];
}

module.exports = { buildNotificationActions };
