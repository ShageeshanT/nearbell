export function routeEarlyCopy(earlyMinutes) {
  const minutes = Math.max(0, Math.round(Number(earlyMinutes) || 0));
  if (minutes === 0) return 'Arriving as planned';
  if (minutes === 1) return '1 minute early';
  return `${minutes} minutes early`;
}
