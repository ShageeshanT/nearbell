export function scaledGeofenceRadius(baseRadiusMeters, travelSpeedKmh) {
  const speedFactor = Math.min(3, 1 + travelSpeedKmh / 60);
  return Math.round(baseRadiusMeters * speedFactor);
}
