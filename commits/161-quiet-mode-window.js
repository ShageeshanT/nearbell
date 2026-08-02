// Utility 161: quiet-mode-window
// Small NearBell helper for arrival alerts and route status handling.

export function quietModeWindow(input = {}) {
  const now = Number(input.now ?? Date.now());
  const etaMinutes = Math.max(0, Number(input.etaMinutes ?? 0));
  const distanceMeters = Math.max(0, Number(input.distanceMeters ?? 0));
  const lastAlertAt = Number(input.lastAlertAt ?? 0);
  const quiet = Boolean(input.quiet);

  const minutesSinceAlert = lastAlertAt ? Math.floor((now - lastAlertAt) / 60000) : Infinity;
  const closeEnough = etaMinutes <= 8 || distanceMeters <= 900;
  const shouldNotify = closeEnough && !quiet && minutesSinceAlert >= 3;

  return {
    key: 'quiet-mode-window',
    etaMinutes,
    distanceMeters,
    closeEnough,
    minutesSinceAlert,
    shouldNotify,
    label: shouldNotify ? 'arrival-soon' : 'watching-route',
  };
}

export default quietModeWindow;
