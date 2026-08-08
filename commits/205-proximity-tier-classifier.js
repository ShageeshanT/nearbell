export function proximityTier(distanceMeters) {
  if (distanceMeters <= 200) return 'imminent';
  if (distanceMeters <= 1000) return 'near';
  if (distanceMeters <= 5000) return 'approaching';
  return 'far';
}
