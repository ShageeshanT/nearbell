// Rounds ETA to friendlier increments the further out the arrival is
export function roundEta(minutes) {
  if (minutes < 10) return Math.round(minutes);
  if (minutes < 60) return Math.round(minutes / 5) * 5;
  return Math.round(minutes / 15) * 15;
}
