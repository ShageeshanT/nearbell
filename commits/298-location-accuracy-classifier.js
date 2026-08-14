// Buckets a raw GPS accuracy reading into a human-readable quality tier
export function accuracyTier(accuracyMeters) {
  if (accuracyMeters <= 10) return "high";
  if (accuracyMeters <= 30) return "medium";
  return "low";
}
