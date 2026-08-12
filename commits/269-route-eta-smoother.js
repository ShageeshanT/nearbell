// Smooths noisy ETA updates with exponential moving average
export function smoothEta(previousEtaMinutes, newEtaMinutes, alpha = 0.3) {
  if (previousEtaMinutes == null) return newEtaMinutes;
  return Math.round(alpha * newEtaMinutes + (1 - alpha) * previousEtaMinutes);
}
