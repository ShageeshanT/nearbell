export function routeConfidenceCopy(score) {
  const value = Number(score);
  if (!Number.isFinite(value)) return 'Confidence unavailable';
  if (value >= 0.8) return 'High confidence ETA';
  if (value >= 0.5) return 'Medium confidence ETA';
  return 'Low confidence ETA';
}
