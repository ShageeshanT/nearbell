export function routeDelayCopy(delayMinutes) {
  const minutes = Math.max(0, Math.round(Number(delayMinutes) || 0));
  if (minutes === 0) return 'On time';
  if (minutes === 1) return '1 minute late';
  return `${minutes} minutes late`;
}
