export function classifyEtaStability(samples = []) {
  const values = samples
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));

  if (values.length < 2) {
    return { level: 'unknown', spreadMinutes: 0, copy: 'Need more ETA samples before judging route stability.' };
  }

  const spread = Math.max(...values) - Math.min(...values);
  const spreadMinutes = Math.round(spread);

  if (spreadMinutes <= 2) {
    return { level: 'steady', spreadMinutes, copy: 'ETA is holding steady.' };
  }

  if (spreadMinutes <= 6) {
    return { level: 'shifting', spreadMinutes, copy: 'ETA is moving a little, keep the alert window flexible.' };
  }

  return { level: 'volatile', spreadMinutes, copy: 'ETA is jumping around, wait before trusting a tight arrival alert.' };
}
