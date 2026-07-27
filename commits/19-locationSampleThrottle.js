/**
 * Throttles how often raw GPS samples are accepted, to save
 * battery while still catching meaningful movement.
 */
function createLocationThrottle(minIntervalMs = 4000) {
  let lastSampleAt = 0;

  return {
    accept(now = Date.now()) {
      if (now - lastSampleAt < minIntervalMs) return false;
      lastSampleAt = now;
      return true;
    },
  };
}

module.exports = { createLocationThrottle };
