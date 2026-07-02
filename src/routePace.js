export function routePace(deltaMinutes) {
  const delta = Number(deltaMinutes);
  if (!Number.isFinite(delta) || Math.abs(delta) < 1) return 'steady';
  return delta > 0 ? 'slowing' : 'faster';
}
