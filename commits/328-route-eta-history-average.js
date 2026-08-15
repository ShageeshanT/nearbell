// Averages historical trip durations for the same route at the same time of day
export function historicalAverageEta(pastDurations) {
  if (pastDurations.length === 0) return null;
  return Math.round(pastDurations.reduce((s, v) => s + v, 0) / pastDurations.length);
}
