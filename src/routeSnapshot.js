export function routeSnapshotStatus({ etaMinutes, distanceKm } = {}) {
  const eta = Number(etaMinutes);
  const distance = Number(distanceKm);
  if (!Number.isFinite(eta) || !Number.isFinite(distance)) return 'incomplete';
  if (eta <= 5 || distance <= 1) return 'near-arrival';
  return 'tracking';
}
