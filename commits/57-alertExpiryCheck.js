/**
 * Determines whether a scheduled alert has expired (its stop
 * time has passed) and should be cleaned up.
 */
function isAlertExpired(alert, now = Date.now(), graceMs = 2 * 60 * 1000) {
  return now - alert.targetTime > graceMs;
}

module.exports = { isAlertExpired };
