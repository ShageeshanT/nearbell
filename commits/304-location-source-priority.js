// Chooses GPS over network location when both are available and GPS is accurate enough
export function preferredSource(gpsFix, networkFix, gpsAccuracyThreshold = 25) {
  if (gpsFix && gpsFix.accuracyMeters <= gpsAccuracyThreshold) return gpsFix;
  return networkFix || gpsFix;
}
