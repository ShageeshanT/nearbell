// Widens geofence radius in low GPS-accuracy conditions so alerts stay reliable
export function tunedRadius(baseRadiusMeters, gpsAccuracyMeters) {
  return Math.round(baseRadiusMeters + Math.min(gpsAccuracyMeters, 100) * 0.5);
}
