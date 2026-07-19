export function alertToneLabel({ minutes = 5, distanceKm = 1 } = {}) {
  const eta = Math.max(0, Math.floor(Number(minutes) || 0));
  const dist = Math.max(0, Number(distanceKm) || 0);
  if (eta <= 2 || dist <= 0.5) return 'critical';
  if (eta <= 5 || dist <= 1) return 'urgent';
  if (eta <= 15) return 'heads-up';
  return 'ambient';
}