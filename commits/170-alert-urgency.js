export function alertUrgency(etaMinutes = 0, distanceMeters = Infinity) {
  if (etaMinutes <= 2 || distanceMeters <= 250) return 'high';
  if (etaMinutes <= 8 || distanceMeters <= 900) return 'normal';
  return 'low';
}
