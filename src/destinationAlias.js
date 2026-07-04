export function destinationAlias(destination = '') {
  const text = String(destination).trim();
  if (!text) return 'Destination';
  return text.split(',')[0].trim().slice(0, 32) || 'Destination';
}
