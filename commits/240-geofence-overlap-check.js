export function geofencesOverlap(centerDistanceMeters, radiusA, radiusB) {
  return centerDistanceMeters < radiusA + radiusB;
}
