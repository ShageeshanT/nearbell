export function scaledRadiusMeters(baseRadiusMeters, speedKmh) {
  return baseRadiusMeters + Math.min(300, speedKmh * 8);
}
