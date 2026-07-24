// Compute the number of whole minutes between "now" and a target slot
// offset. Negative when the slot is in the past. Null for bad input.
export function scheduleSlotMinutesUntil(targetOffset, nowOffset) {
  if (targetOffset == null || nowOffset == null) return null;
  if (!Number.isFinite(targetOffset) || !Number.isFinite(nowOffset)) return null;
  return Math.floor(targetOffset - nowOffset);
}
