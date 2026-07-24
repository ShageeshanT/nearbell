// Return true when a target slot offset (minutes from now) is
// strictly in the past. Zero offsets count as "now" and return false.
export function scheduleSlotIsPast(targetOffset, nowOffset) {
  if (targetOffset == null || nowOffset == null) return null;
  if (!Number.isFinite(targetOffset) || !Number.isFinite(nowOffset)) return null;
  return targetOffset < nowOffset;
}
