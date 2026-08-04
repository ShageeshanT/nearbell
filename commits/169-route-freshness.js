export function routeIsFresh(updatedAt, now = Date.now(), maxAgeMinutes = 5) {
  return Boolean(updatedAt) && now - Number(updatedAt) <= maxAgeMinutes * 60_000;
}
