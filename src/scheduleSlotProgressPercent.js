// Compute progress (0-100) through a window for a slot offset
// between windowStart and windowEnd. Clamps to [0, 100]. Returns 0
// for missing or malformed windows.
export function scheduleSlotProgressPercent(window, offsetMinutes) {
  if (!window || typeof window !== 'object') return 0;
  const start = Number(window.startMinutes);
  const end = Number(window.endMinutes);
  if (offsetMinutes == null) return 0;
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 0;
  if (end <= start) return 0;
  if (!Number.isFinite(offsetMinutes)) return 0;
  const ratio = (offsetMinutes - start) / (end - start);
  if (ratio <= 0) return 0;
  if (ratio >= 1) return 100;
  return Math.round(ratio * 100);
}
