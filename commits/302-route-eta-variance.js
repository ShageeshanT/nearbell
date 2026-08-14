// Computes variance across recent ETA samples to gauge prediction stability
export function etaVariance(samples) {
  if (samples.length === 0) return 0;
  const mean = samples.reduce((s, v) => s + v, 0) / samples.length;
  return Math.round(samples.reduce((s, v) => s + (v - mean) ** 2, 0) / samples.length);
}
