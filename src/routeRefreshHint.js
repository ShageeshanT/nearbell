export function routeRefreshHint(status = 'fresh') {
  const value = String(status).toLowerCase();
  if (value === 'stale') return 'Refresh Maps to update the route ETA.';
  if (value === 'missing') return 'Start a route before enabling arrival alerts.';
  return 'Route ETA is ready for NearBell alerts.';
}
