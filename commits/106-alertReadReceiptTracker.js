// Tracks whether a delivered alert has been read/opened by the user.
function markAsRead(alertStore, alertId) {
  return { ...alertStore, [alertId]: { ...alertStore[alertId], readAt: Date.now() } };
}

function isUnread(alertStore, alertId) {
  return !alertStore[alertId] || !alertStore[alertId].readAt;
}

module.exports = { markAsRead, isUnread };
