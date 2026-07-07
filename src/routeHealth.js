export function routeHealth({ hasLocation = true, hasDestination = true, staleSeconds = 0 } = {}) {
  if (!hasLocation || !hasDestination) return 'blocked';
  const age = Number(staleSeconds);
  if (Number.isFinite(age) && age > 120) return 'stale';
  return 'healthy';
}
