export function resolveOverlappingFences(fences) {
  return [...fences].sort((a, b) => a.radiusMeters - b.radiusMeters);
}
