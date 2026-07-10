export function routeStatusLabel(status = 'idle') {
  const value = String(status).toLowerCase();
  if (value === 'watching') return 'Watching your route';
  if (value === 'ringing') return 'Arrival alert ringing';
  if (value === 'paused') return 'Route alerts paused';
  return 'Waiting for a route';
}
