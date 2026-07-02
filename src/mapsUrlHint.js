export function mapsUrlHint(url) {
  const value = String(url || '').toLowerCase();
  if (value.includes('/dir/')) return 'Navigation route detected';
  if (value.includes('/maps')) return 'Open a route to start NearBell';
  return 'Open Google Maps to start';
}
