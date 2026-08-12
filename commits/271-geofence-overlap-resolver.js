// Picks the smallest-radius geofence when two saved fences overlap at a point
export function resolveOverlap(fenceA, fenceB) {
  return fenceA.radiusMeters <= fenceB.radiusMeters ? fenceA : fenceB;
}
