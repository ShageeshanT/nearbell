export function etaJitterLevel(samples = []) {
  const values = samples.map(Number).filter(Number.isFinite);
  if (values.length < 2) return 'unknown';
  const spread = Math.max(...values) - Math.min(...values);
  if (spread >= 8) return 'high';
  if (spread >= 3) return 'medium';
  return 'low';
}
