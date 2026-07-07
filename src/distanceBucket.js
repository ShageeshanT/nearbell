export function distanceBucket(kilometers = 0) {
  const value = Number(kilometers);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 1) return 'final-stretch';
  if (value <= 5) return 'approaching';
  return 'far';
}
