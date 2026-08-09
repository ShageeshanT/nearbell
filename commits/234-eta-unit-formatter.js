export function formatEta(minutes) {
  if (minutes < 1) return 'arriving now';
  if (minutes < 60) return `${Math.round(minutes)} min`;
  const hours = Math.floor(minutes / 60);
  const rem = Math.round(minutes % 60);
  return `${hours}h ${rem}m`;
}
