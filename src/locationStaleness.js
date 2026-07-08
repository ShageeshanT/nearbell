export function locationStaleness(seconds = 0) {
  const value = Number(seconds);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 30) return 'fresh';
  if (value <= 120) return 'aging';
  return 'stale';
}
