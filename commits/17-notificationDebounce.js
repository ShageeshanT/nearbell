/**
 * Prevents the same alert key from firing more than once
 * within a cooldown window.
 */
function createNotificationDebouncer(cooldownMs = 60 * 1000) {
  const lastFired = new Map();

  return {
    shouldFire(key, now = Date.now()) {
      const last = lastFired.get(key) || 0;
      if (now - last < cooldownMs) return false;
      lastFired.set(key, now);
      return true;
    },
    reset(key) {
      lastFired.delete(key);
    },
  };
}

module.exports = { createNotificationDebouncer };
