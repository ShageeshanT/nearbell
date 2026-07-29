/**
 * Computes the app icon badge count from unread alerts,
 * capped so the badge never shows an absurd number.
 */
function badgeCountFor(unreadAlerts, cap = 99) {
  return Math.min(unreadAlerts.length, cap);
}

module.exports = { badgeCountFor };
