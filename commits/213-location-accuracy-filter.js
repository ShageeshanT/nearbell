export function isAccurateFix(accuracyMeters, maxAccuracyMeters = 50) {
  return accuracyMeters > 0 && accuracyMeters <= maxAccuracyMeters;
}
