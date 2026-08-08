export function estimateTrafficDelayMinutes(freeFlowMinutes, currentMinutes) {
  return Math.max(0, currentMinutes - freeFlowMinutes);
}
