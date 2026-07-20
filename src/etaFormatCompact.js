import { etaRoundToNearest } from './etaRoundToNearest.js';

// Format an ETA in seconds into a compact user-facing string.
// Below 60 minutes -> "Nm". At or above 60 minutes -> "Nh MMm".
// Returns null for invalid input.
export function etaFormatCompact(seconds) {
  if (seconds == null || Number.isNaN(seconds)) return null;
  if (seconds < 0) return null;

  const totalMinutes = etaRoundToNearest(seconds);
  if (totalMinutes == null) return null;

  if (totalMinutes < 60) {
    return `${totalMinutes}m`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes - hours * 60;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}
