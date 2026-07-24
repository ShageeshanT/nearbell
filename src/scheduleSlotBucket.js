// Bucket a slot offset (minutes from midnight local) into a time of
// day bucket used for grouping in the UI. Returns null for bad input.
export function scheduleSlotBucket(offsetMinutes) {
  if (offsetMinutes == null) return null;
  if (!Number.isFinite(offsetMinutes) || offsetMinutes < 0) return null;
  const mins = offsetMinutes % (24 * 60);
  if (mins < 6 * 60) return 'early-morning';
  if (mins < 12 * 60) return 'morning';
  if (mins < 17 * 60) return 'afternoon';
  if (mins < 21 * 60) return 'evening';
  return 'night';
}
