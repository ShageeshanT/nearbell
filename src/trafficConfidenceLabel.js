// Label how confident we are in a traffic estimate given a delay
// variance in seconds. Small variance -> high confidence.
export function trafficConfidenceLabel(varianceSeconds) {
  if (varianceSeconds == null || Number.isNaN(varianceSeconds)) return null;
  if (varianceSeconds < 0) return null;

  if (varianceSeconds < 30) return 'high confidence';
  if (varianceSeconds < 120) return 'medium confidence';
  return 'low confidence';
}