// Estimates a conservative ETA using a percentile of recent trip durations
export function percentileEta(recentDurations, percentile = 0.85) {
  if (recentDurations.length === 0) return null;
  const sorted = [...recentDurations].sort((a, b) => a - b);
  const idx = Math.min(sorted.length - 1, Math.floor(percentile * sorted.length));
  return sorted[idx];
}
