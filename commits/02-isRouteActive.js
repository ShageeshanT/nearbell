export function isRouteActive(snapshot = {}) {
  if (!snapshot || typeof snapshot !== 'object') return false;
  if (snapshot.status === 'incomplete') return false;
  return Number.isFinite(Number(snapshot.etaMinutes)) || Number.isFinite(Number(snapshot.distanceKm));
}