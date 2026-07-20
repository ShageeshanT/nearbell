// Estimate journey progress as a percentage from total and remaining
// distances. Used for progress bars and "you are X% there" copy.
// Returns a value clamped to the [0, 100] range, or null for bad input.
export function arrivalProgressPercent(totalMeters, remainingMeters) {
  if (totalMeters == null || remainingMeters == null) return null;
  if (Number.isNaN(totalMeters) || Number.isNaN(remainingMeters)) return null;
  if (totalMeters <= 0) return null;
  if (remainingMeters < 0) return null;

  const travelled = Math.max(0, totalMeters - remainingMeters);
  const pct = (travelled / totalMeters) * 100;

  if (pct < 0) return 0;
  if (pct > 100) return 100;
  return Math.round(pct);
}
