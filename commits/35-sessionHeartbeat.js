/**
 * Tracks whether the app's background session is still alive,
 * based on the last heartbeat ping received from the client.
 */
function createHeartbeatTracker(staleAfterMs = 45 * 1000) {
  let lastPingAt = Date.now();

  return {
    ping(now = Date.now()) {
      lastPingAt = now;
    },
    isAlive(now = Date.now()) {
      return now - lastPingAt < staleAfterMs;
    },
  };
}

module.exports = { createHeartbeatTracker };
