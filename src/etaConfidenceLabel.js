export function etaConfidenceLabel(confidence = 0) {
  const value = Number(confidence);
  if (!Number.isFinite(value) || value <= 0) return 'ETA confidence unavailable';
  if (value >= 0.85) return 'ETA confidence high';
  if (value >= 0.55) return 'ETA confidence medium';
  return 'ETA confidence low';
}
