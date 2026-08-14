// Rejects ETA readings that jump too far from the recent rolling median
export function isEtaOutlier(newEta, recentEtas, maxDeltaMinutes = 15) {
  if (recentEtas.length === 0) return false;
  const sorted = [...recentEtas].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  return Math.abs(newEta - median) > maxDeltaMinutes;
}
