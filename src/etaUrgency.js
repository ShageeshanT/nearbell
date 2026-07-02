export function etaUrgency(minutes) {
  const value = Number(minutes);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 5) return 'now';
  if (value <= 15) return 'soon';
  return 'later';
}
