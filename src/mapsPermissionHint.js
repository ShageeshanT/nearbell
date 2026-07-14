export function mapsPermissionHint(state = 'ready') {
  const value = String(state).toLowerCase();
  if (value === 'blocked') return 'Allow NearBell on Google Maps to read route ETA text.';
  if (value === 'missing-route') return 'Start navigation before NearBell watches arrival time.';
  return 'NearBell can watch this Maps route.';
}
