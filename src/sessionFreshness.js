export function sessionFreshness(ageSeconds) {
  const seconds = Number(ageSeconds);
  if (!Number.isFinite(seconds)) return 'unknown';
  if (seconds <= 90) return 'fresh';
  if (seconds <= 300) return 'aging';
  return 'stale';
}
