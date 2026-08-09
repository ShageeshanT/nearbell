export function debounceGeofenceEntry(lastEntryTimestamp, nowTimestamp, minGapMs = 5000) {
  return nowTimestamp - lastEntryTimestamp >= minGapMs;
}
