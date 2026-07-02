export function destinationHint(destination) {
  const value = String(destination || '').trim();
  return value ? `Heading to ${value}` : 'Pick a destination to start alerts';
}
