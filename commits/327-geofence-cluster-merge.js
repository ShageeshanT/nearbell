// Merges overlapping geofences that are close enough to be treated as one cluster
export function shouldMergeFences(fenceA, fenceB, distanceFn) {
  const gap = distanceFn(fenceA.center, fenceB.center) - fenceA.radiusMeters - fenceB.radiusMeters;
  return gap < 20;
}
