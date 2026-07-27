/**
 * Queues actions (favorite toggles, mute changes) made while
 * offline, and flushes them once connectivity returns.
 */
function createOfflineQueue() {
  const pending = [];

  return {
    enqueue(action) {
      pending.push(action);
    },
    async flush(sendFn) {
      while (pending.length) {
        const action = pending.shift();
        try {
          await sendFn(action);
        } catch {
          pending.unshift(action);
          break;
        }
      }
    },
    size() {
      return pending.length;
    },
  };
}

module.exports = { createOfflineQueue };
