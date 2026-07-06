export function arrivalConfidenceLabel(score = 1) {
  const value = Number(score);
  if (!Number.isFinite(value)) return 'unknown confidence';
  if (value >= 0.8) return 'high confidence';
  if (value >= 0.5) return 'medium confidence';
  return 'low confidence';
}
