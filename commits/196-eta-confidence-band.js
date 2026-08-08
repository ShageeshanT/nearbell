export function etaConfidenceBand(etaMinutes, varianceRatio = 0.15) {
  const spread = etaMinutes * varianceRatio;
  return { low: Math.max(0, etaMinutes - spread), high: etaMinutes + spread };
}
