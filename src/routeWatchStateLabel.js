export function routeWatchStateLabel(state = 'idle') {
  const value = String(state).toLowerCase();
  if (value === 'watching') return 'Watching route ETA';
  if (value === 'paused') return 'Route watch paused';
  if (value === 'error') return 'Route watch needs attention';
  return 'Route watch idle';
}
