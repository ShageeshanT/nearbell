export function routeMilestone(progress) {
  const value = Number(progress);
  if (!Number.isFinite(value)) return 'unknown';
  if (value >= 0.9) return 'final stretch';
  if (value >= 0.5) return 'halfway';
  return 'getting started';
}
