export function arrivalWindow(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value)) return 'unknown';
  if (value <= 2) return 'now';
  if (value <= 10) return 'soon';
  return 'later';
}
