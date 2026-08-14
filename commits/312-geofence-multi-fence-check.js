// Returns all geofences that currently contain the given position
export function fencesContaining(position, fences, distanceFn) {
  return fences.filter((f) => distanceFn(position, f.center) <= f.radiusMeters);
}
