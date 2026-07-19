export function alertReadinessScoreV2({ eta, distance, signalQuality = 1 } = {}) {
  const etaScore = Number.isFinite(Number(eta)) ? Math.max(0, Math.min(1, 1 - Number(eta) / 30)) : 0;
  const distanceScore = Number.isFinite(Number(distance)) ? Math.max(0, Math.min(1, 1 - Number(distance) / 10)) : 0;
  const quality = Number.isFinite(Number(signalQuality)) ? Math.max(0, Math.min(1, Number(signalQuality))) : 0;
  return Number((0.5 * etaScore + 0.3 * distanceScore + 0.2 * quality).toFixed(3));
}