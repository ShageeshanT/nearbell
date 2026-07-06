export function gpsDriftMeters(points = []) {
  const values = points.map((p) => Number(p?.accuracyMeters)).filter(Number.isFinite);
  if (!values.length) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}
