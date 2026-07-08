export function thresholdLabel(minutes = 5) {
  const value = Number(minutes);
  if (!Number.isFinite(value)) return 'custom alert';
  if (value === 1) return '1 minute before';
  return `${value} minutes before`;
}
