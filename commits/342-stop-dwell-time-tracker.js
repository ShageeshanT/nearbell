/**
 * Tracks how long a vehicle typically dwells at a stop, using a rolling
 * average so short-term outliers (traffic light, one slow boarding) don't
 * skew the estimate much.
 */
function trackDwellTime(stopId, observedSeconds, history = new Map()) {
  const prev = history.get(stopId) || { avg: observedSeconds, count: 0 };
  const count = prev.count + 1;
  const avg = prev.avg + (observedSeconds - prev.avg) / count;

  history.set(stopId, { avg, count });
  return { avgDwellSeconds: Math.round(avg), samples: count };
}

module.exports = { trackDwellTime };
