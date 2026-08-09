export function etaConfidenceScore(sampleCount, varianceSeconds) {
  if (sampleCount <= 0) return 0;
  const stability = 1 / (1 + varianceSeconds / 60);
  const sampleWeight = Math.min(1, sampleCount / 10);
  return Math.round(stability * sampleWeight * 100) / 100;
}
