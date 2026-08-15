// Compares two stops' ETAs, treating near-ties as equal for stable UI ordering
export function compareEta(a, b, tieToleranceMinutes = 0.5) {
  const diff = a.etaMinutes - b.etaMinutes;
  return Math.abs(diff) <= tieToleranceMinutes ? 0 : diff;
}
