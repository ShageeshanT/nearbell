export function rideModeCopy(mode = 'drive') {
  const labels = { drive: 'Driving mode', transit: 'Transit mode', walk: 'Walking mode', ride: 'Ride-share mode' };
  return labels[mode] || 'Route mode';
}
