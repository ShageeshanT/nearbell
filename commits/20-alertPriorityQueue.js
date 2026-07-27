/**
 * A tiny priority queue for alerts so higher-urgency alerts
 * (e.g. "arriving now") surface before routine ones.
 */
function createAlertQueue() {
  const items = [];

  return {
    push(alert, priority = 0) {
      items.push({ alert, priority });
      items.sort((a, b) => b.priority - a.priority);
    },
    pop() {
      const next = items.shift();
      return next ? next.alert : null;
    },
    size() {
      return items.length;
    },
  };
}

module.exports = { createAlertQueue };
