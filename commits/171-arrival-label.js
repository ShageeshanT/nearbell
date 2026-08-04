export function arrivalLabel(etaMinutes = 0) {
  const eta = Math.max(0, Math.round(Number(etaMinutes)));
  return eta <= 1 ? 'Arriving now' : `Arriving in ${eta} min`;
}
