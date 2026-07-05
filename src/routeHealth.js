export function routeHealthLabel(score = 100) {
  const value = Number(score);
  if (!Number.isFinite(value)) return 'Unknown route health';
  if (value >= 80) return 'Healthy route';
  if (value >= 50) return 'Route needs attention';
  return 'Route is unreliable';
}
