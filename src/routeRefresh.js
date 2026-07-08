export function routeRefreshIntervalSeconds({ etaMinutes = 20, batteryMode = 'standard' } = {}) {
  const eta = Number(etaMinutes);
  if (batteryMode === 'conserve') return 90;
  if (!Number.isFinite(eta)) return 60;
  if (eta <= 5) return 15;
  if (eta <= 15) return 30;
  return 60;
}
