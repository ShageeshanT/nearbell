export function etaBucket(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return 'unknown';
  if (value <= 5) return 'near';
  if (value <= 15) return 'soon';
  if (value <= 45) return 'later';
  return 'long trip';
}
