// Drops alert history entries older than a retention window to bound storage
export function pruneHistory(history, nowMs, retentionMs = 30 * 24 * 60 * 60 * 1000) {
  return history.filter((h) => nowMs - h.atMs <= retentionMs);
}
