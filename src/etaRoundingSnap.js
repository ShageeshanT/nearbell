// Snap an ETA minute value to a fixed bucket size for cleaner display.
// Useful when you want stable copy across refreshes, e.g. "15 min away"
// instead of "14 then 15 then 15" flicker.
export function etaRoundingSnap(minutes, bucketSize = 5) {
  if (minutes == null || Number.isNaN(minutes)) return null;
  if (typeof minutes !== 'number') return null;
  if (minutes < 0) return null;
  const size = Math.max(1, Math.floor(bucketSize));
  return Math.round(minutes / size) * size;
}
