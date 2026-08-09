export function alertPriorityRank(minutesToArrival) {
  if (minutesToArrival <= 2) return 'critical';
  if (minutesToArrival <= 5) return 'high';
  if (minutesToArrival <= 15) return 'medium';
  return 'low';
}
