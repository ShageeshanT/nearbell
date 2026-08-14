// Adds extra padding to a geofence boundary in dense urban areas with weaker GPS
export function paddedRadius(baseRadiusMeters, isUrban) {
  return isUrban ? baseRadiusMeters + 30 : baseRadiusMeters;
}
