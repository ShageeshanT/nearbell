// Build an absolute ISO timestamp for a future alert slot given a base
// time and an offset in minutes. Returns null if either input is missing
// or not finite.
export function scheduleSlotForAlert(baseMs, offsetMinutes) {
  if (baseMs == null || offsetMinutes == null) return null;
  if (!Number.isFinite(baseMs) || !Number.isFinite(offsetMinutes)) return null;
  return new Date(baseMs + offsetMinutes * 60_000).toISOString();
}
