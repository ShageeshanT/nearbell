export function createTripMemory({ destination = '', lastEtaMinutes, alertCount = 0 } = {}) {
  const name = String(destination || '').trim();
  const eta = Number(lastEtaMinutes);

  return {
    destination: name || 'Unknown destination',
    lastEtaMinutes: Number.isFinite(eta) ? Math.max(0, Math.round(eta)) : null,
    alertCount: Math.max(0, Math.round(Number(alertCount) || 0)),
    reusable: Boolean(name) && Number.isFinite(eta),
  };
}
