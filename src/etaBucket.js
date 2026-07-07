export function etaBucket(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 5) return 'immediate';
  if (value <= 15) return 'soon';
  return 'later';
}
