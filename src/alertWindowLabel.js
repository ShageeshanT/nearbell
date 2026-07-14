export function alertWindowLabel(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return 'No alert window selected';
  if (value <= 5) return 'Final arrival warning';
  if (value <= 15) return 'Early arrival warning';
  return 'Long range arrival warning';
}
