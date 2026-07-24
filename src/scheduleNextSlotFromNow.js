// Pick the next scheduled slot (offset minutes from now) that is
// strictly in the future, given a sorted list of slot offsets. Returns
// null when no slot qualifies.
export function scheduleNextSlotFromNow(slots, nowMinutes) {
  if (!Array.isArray(slots)) return null;
  if (nowMinutes == null || !Number.isFinite(nowMinutes)) return null;
  for (const slot of slots) {
    const n = Number(slot);
    if (!Number.isFinite(n)) continue;
    if (n > nowMinutes) return n;
  }
  return null;
}
