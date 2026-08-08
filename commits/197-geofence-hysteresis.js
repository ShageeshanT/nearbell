export function geofenceHysteresis(distanceMeters, radiusMeters, wasInside) {
  const buffer = wasInside ? radiusMeters * 1.15 : radiusMeters;
  return distanceMeters <= buffer;
}
