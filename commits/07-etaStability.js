export function etaStability(values = []) {
  const list = values.map(Number).filter(Number.isFinite);
  if (list.length < 2) return 1;
  const mean = list.reduce((a, b) => a + b, 0) / list.length;
  const variance = list.reduce((a, b) => a + (b - mean) ** 2, 0) / list.length;
  const stddev = Math.sqrt(variance);
  return Number(Math.max(0, Math.min(1, 1 - stddev / Math.max(mean, 1))).toFixed(3));
}