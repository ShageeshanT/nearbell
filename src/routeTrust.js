export function routeTrustScore({ ageSeconds = 0, source = 'maps', moving = true } = {}) {
  const age = Number(ageSeconds);
  let score = 100;
  if (!moving) score -= 25;
  if (source === 'manual') score -= 15;
  if (!Number.isFinite(age) || age > 300) score -= 30;
  else if (age > 120) score -= 15;
  return Math.max(0, Math.min(100, score));
}
