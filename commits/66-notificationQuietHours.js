/**
 * Checks whether notifications should be silenced right now
 * based on the user's configured quiet hours.
 */
function isQuietHours(now, quietStartHour, quietEndHour) {
  const hour = now.getHours();
  if (quietStartHour === quietEndHour) return false;
  if (quietStartHour < quietEndHour) {
    return hour >= quietStartHour && hour < quietEndHour;
  }
  return hour >= quietStartHour || hour < quietEndHour;
}

module.exports = { isQuietHours };
