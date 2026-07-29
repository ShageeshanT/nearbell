/**
 * Keeps a rolling in-memory log of ETA samples per route,
 * used for later trend analysis and debugging.
 */
function createEtaHistoryLogger(maxSamples = 100) {
  const history = new Map();

  return {
    log(routeId, etaMinutes, at = Date.now()) {
      const list = history.get(routeId) || [];
      list.push({ etaMinutes, at });
      if (list.length > maxSamples) list.shift();
      history.set(routeId, list);
    },
    get(routeId) {
      return history.get(routeId) || [];
    },
  };
}

module.exports = { createEtaHistoryLogger };
