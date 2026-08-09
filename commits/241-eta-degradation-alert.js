export function hasEtaDegraded(previousEtaMinutes, currentEtaMinutes, thresholdMinutes = 5) {
  return currentEtaMinutes - previousEtaMinutes > thresholdMinutes;
}
