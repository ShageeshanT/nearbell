export function estimateTrafficDelayMinutes(freeFlowMinutes, currentMinutes) {
  return Math.max(0, Math.round(currentMinutes - freeFlowMinutes));
}
