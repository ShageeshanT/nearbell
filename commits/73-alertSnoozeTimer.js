// Manages a temporary snooze window for a specific alert so it won't re-fire immediately.
function snoozeUntil(nowMs, snoozeMinutes = 10) {
  return nowMs + snoozeMinutes * 60 * 1000;
}

function isSnoozed(nowMs, snoozeExpiryMs) {
  return snoozeExpiryMs != null && nowMs < snoozeExpiryMs;
}

module.exports = { snoozeUntil, isSnoozed };
