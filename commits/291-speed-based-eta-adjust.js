// Adjusts ETA downward or upward when live speed diverges from the assumed average
export function adjustEtaForSpeed(baseEtaMinutes, assumedSpeedKmh, actualSpeedKmh) {
  if (actualSpeedKmh <= 0) return baseEtaMinutes;
  return Math.round(baseEtaMinutes * (assumedSpeedKmh / actualSpeedKmh));
}
