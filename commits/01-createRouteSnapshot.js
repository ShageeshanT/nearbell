export function createRouteSnapshot({ etaMinutes, distanceKm, destination = '' } = {}) {
  const eta = Number(etaMinutes);
  const distance = Number(distanceKm);
  const status = routeSnapshotStatus({ etaMinutes: eta, distanceKm: distance });
  return {
    destination: String(destination || '').trim(),
    etaMinutes: Number.isFinite(eta) ? eta : null,
    distanceKm: Number.isFinite(distance) ? distance : null,
    status,
    capturedAt: new Date(0).toISOString()
  };
}

function routeSnapshotStatus({ etaMinutes, distanceKm } = {}) {
  const eta = Number(etaMinutes);
  const distance = Number(distanceKm);
  if (!Number.isFinite(eta) || !Number.isFinite(distance)) return 'incomplete';
  if (eta <= 5 || distance <= 1) return 'near-arrival';
  return 'tracking';
}