// Converts distance traveled into a percentage of total route length
export function progressPercent(traveledMeters, totalMeters) {
  if (totalMeters <= 0) return 0;
  return Math.min(100, Math.round((traveledMeters / totalMeters) * 100));
}
