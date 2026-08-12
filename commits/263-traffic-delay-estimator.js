// Estimates extra minutes added to ETA based on live vs free-flow speed
export function trafficDelayMinutes(freeFlowSpeedKmh, currentSpeedKmh, distanceKm) {
  if (currentSpeedKmh <= 0) return null;
  const freeFlowTime = (distanceKm / freeFlowSpeedKmh) * 60;
  const currentTime = (distanceKm / currentSpeedKmh) * 60;
  return Math.round(currentTime - freeFlowTime);
}
