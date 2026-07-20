// Format a distance value (metres) into a compact user-facing string.
// Below 1 km -> "Xm". At or above 1 km -> "X.Y km" with one decimal.
// Returns null for invalid input.
export function distanceFormatCompact(meters) {
  if (meters == null || Number.isNaN(meters)) return null;
  if (meters < 0) return null;

  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }

  const km = meters / 1000;
  const rounded = Math.round(km * 10) / 10;
  return `${rounded} km`;
}
