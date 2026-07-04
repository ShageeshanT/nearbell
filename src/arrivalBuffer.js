export function arrivalBufferMinutes({ etaMinutes, leadMinutes = 5, traffic = 'normal' } = {}) {
  const eta = Number(etaMinutes);
  const lead = Number(leadMinutes);
  const trafficBuffer = traffic === 'heavy' ? 4 : traffic === 'light' ? 1 : 2;
  if (!Number.isFinite(eta) || eta <= 0) return lead + trafficBuffer;
  return Math.max(1, Math.min(20, Math.round(lead + trafficBuffer + eta * 0.08)));
}
