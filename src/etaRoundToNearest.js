// Round an ETA value in seconds to the nearest minute bucket.
// Used to smooth jitter before display, so "14m 32s" does not flicker
// to "14m 33s" every refresh tick.
export function etaRoundToNearest(seconds, step = 1) {
  if (seconds == null || Number.isNaN(seconds)) return null;
  if (seconds < 0) return null;
  const s = Math.max(1, Math.floor(step));
  const minutes = seconds / 60;
  const rounded = Math.round(minutes / s) * s;
  return rounded;
}
