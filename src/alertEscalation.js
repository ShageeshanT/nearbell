export function alertEscalationLevel({ etaMinutes, missedCount = 0, permission = 'granted' } = {}) {
  const eta = Number(etaMinutes);
  const misses = Number(missedCount) || 0;
  if (permission !== 'granted' || misses >= 2) return 'critical';
  if (Number.isFinite(eta) && eta <= 5) return 'urgent';
  if (misses === 1) return 'urgent';
  return 'normal';
}
