export function snoozeWindowMinutes(minutes = 5) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value < 1) return 1;
  if (value > 30) return 30;
  return Math.round(value);
}
