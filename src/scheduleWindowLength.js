// Compute the length (in minutes) of a scheduling window. Returns 0
// when the window is missing, malformed, or inverted.
export function scheduleWindowLength(window) {
  if (!window || typeof window !== 'object') return 0;
  const start = Number(window.startMinutes);
  const end = Number(window.endMinutes);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  if (end < start) return 0;
  return end - start;
}
