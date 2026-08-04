export function etaBucket(minutes = 0) {
  const eta = Math.max(0, Number(minutes));
  if (eta <= 3) return 'imminent';
  if (eta <= 10) return 'nearby';
  if (eta <= 25) return 'en-route';
  return 'distant';
}
