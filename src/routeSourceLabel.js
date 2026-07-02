export function routeSourceLabel(source) {
  const normalized = String(source || '').toLowerCase();
  if (normalized === 'manual') return 'Manual ETA';
  if (normalized === 'maps') return 'Maps ETA';
  return 'Route ETA';
}
