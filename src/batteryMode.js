export function batteryMode(level = 100) {
  const value = Number(level);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 15) return 'critical-saving';
  if (value <= 35) return 'saving';
  return 'normal';
}
