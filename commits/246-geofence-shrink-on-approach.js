export function shrinkRadiusOnApproach(baseRadiusMeters, distanceMeters, minRadiusMeters = 30) {
  if (distanceMeters > baseRadiusMeters * 2) return baseRadiusMeters;
  const shrinkFactor = Math.max(0, distanceMeters / (baseRadiusMeters * 2));
  const radius = baseRadiusMeters * shrinkFactor;
  return Math.max(minRadiusMeters, Math.round(radius));
}
