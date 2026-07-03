export function routeRisk({ etaMinutes, permission = 'granted', moving = true } = {}) {
  const eta = Number(etaMinutes);
  let score = 0;

  if (!Number.isFinite(eta)) score += 3;
  else if (eta <= 5) score += 2;
  else if (eta <= 15) score += 1;

  if (permission !== 'granted') score += 2;
  if (!moving) score += 1;

  if (score >= 4) return { level: 'high', score, copy: 'High risk of missing the right alert moment.' };
  if (score >= 2) return { level: 'medium', score, copy: 'Watch this route before trusting automation fully.' };
  return { level: 'low', score, copy: 'Route alert risk looks low.' };
}
