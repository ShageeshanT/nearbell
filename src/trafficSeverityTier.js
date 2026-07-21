// Bucket a delay (seconds) into a severity tier used for UI styling
// and copy. Returns null for bad input.
export function trafficSeverityTier(delaySeconds) {
  if (delaySeconds == null || Number.isNaN(delaySeconds)) return null;
  if (delaySeconds < 0) return null;

  if (delaySeconds === 0) return 'clear';
  if (delaySeconds < 300) return 'light';      // < 5 min
  if (delaySeconds < 900) return 'moderate';   // 5-15 min
  if (delaySeconds < 1800) return 'heavy';     // 15-30 min
  return 'severe';                             // >= 30 min
}