/**
 * Tracks a temporary snooze window for a single alert so it
 * doesn't re-fire while the user is still near the stop.
 */
function createSnoozeTimer(durationMs = 5 * 60 * 1000) {
  let snoozedUntil = 0;

  return {
    snooze(now = Date.now()) {
      snoozedUntil = now + durationMs;
      return snoozedUntil;
    },
    isSnoozed(now = Date.now()) {
      return now < snoozedUntil;
    },
    remainingMs(now = Date.now()) {
      return Math.max(0, snoozedUntil - now);
    },
    clear() {
      snoozedUntil = 0;
    },
  };
}

module.exports = { createSnoozeTimer };
