/**
 * Suppresses an alert if a very similar one for the same route/stop was
 * already shown within the given cooldown window.
 */
function shouldSuppressRepeat(alert, recentAlerts, cooldownMs = 5 * 60 * 1000) {
  const now = alert.timestamp || Date.now();

  return recentAlerts.some((prior) => {
    const sameTarget = prior.routeId === alert.routeId && prior.stopId === alert.stopId;
    const withinWindow = now - prior.timestamp < cooldownMs;
    return sameTarget && withinWindow;
  });
}

module.exports = { shouldSuppressRepeat };
