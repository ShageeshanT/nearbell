export function shouldMergeFences(centerDistanceMeters, radiusA, radiusB) {
  return centerDistanceMeters < (radiusA + radiusB) * 0.5;
}
