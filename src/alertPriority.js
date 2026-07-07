export function alertPriority({ etaMinutes = 0, confidence = 1 } = {}) {
  const eta = Number(etaMinutes);
  const score = Number(confidence);
  if (!Number.isFinite(eta) || !Number.isFinite(score)) return 'normal';
  if (eta <= 5 && score >= 0.7) return 'critical';
  if (eta <= 15) return 'high';
  return 'normal';
}
