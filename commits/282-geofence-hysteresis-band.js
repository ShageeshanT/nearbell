// Uses a wider exit radius than entry radius to prevent alert flapping at the fence edge
export function hysteresisState(insideNow, distanceMeters, entryRadius, exitRadius) {
  if (!insideNow) return distanceMeters <= entryRadius;
  return distanceMeters <= exitRadius;
}
