export function routeCacheKey(origin, destination) {
  return `${origin}=>${destination}`.toLowerCase();
}
