export function routeSignalLabel(signal = 'stable') {
  const value = String(signal).toLowerCase();
  if (value === 'lost') return 'Route signal lost';
  if (value === 'weak') return 'Route signal weak';
  if (value === 'recovering') return 'Route signal recovering';
  return 'Route signal stable';
}
