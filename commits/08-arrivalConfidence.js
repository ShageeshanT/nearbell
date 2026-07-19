export function arrivalConfidence({ etaStability = 1, signalQuality = 1 } = {}) {
  const s = Math.max(0, Math.min(1, Number(etaStability)));
  const q = Math.max(0, Math.min(1, Number(signalQuality)));
  return Number((0.7 * s + 0.3 * q).toFixed(3));
}