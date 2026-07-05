export function tripPhase({ etaMinutes, started = false, arrived = false } = {}) {
  if (arrived) return 'arrived';
  if (!started) return 'planning';
  const eta = Number(etaMinutes);
  if (Number.isFinite(eta) && eta <= 5) return 'arrival';
  if (Number.isFinite(eta) && eta <= 15) return 'approach';
  return 'en-route';
}
