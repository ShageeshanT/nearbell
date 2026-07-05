export function tripSummaryLine({ destination = 'destination', etaMinutes } = {}) {
  const eta = Number(etaMinutes);
  if (!Number.isFinite(eta)) return `Tracking route to ${destination}.`;
  return `Tracking ${destination}, ${eta} min away.`;
}
