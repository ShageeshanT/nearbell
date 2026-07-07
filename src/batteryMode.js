export function batteryMode(level = 1) {
  const value = Number(level);
  if (!Number.isFinite(value)) return 'standard';
  if (value <= 0.15) return 'conserve';
  if (value <= 0.35) return 'balanced';
  return 'standard';
}
