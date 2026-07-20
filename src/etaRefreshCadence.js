// Pick a sensible refresh cadence based on how far away arrival is.
// Closer = refresh more often so users see live updates without
// stale "15 minutes away" copy while parked at the curb.
export function etaRefreshCadence(etaMinutes) {
  if (etaMinutes == null || Number.isNaN(etaMinutes)) return 60;
  if (typeof etaMinutes !== 'number') return 60;
  if (etaMinutes < 0) return 60;

  if (etaMinutes <= 2) return 10;
  if (etaMinutes <= 5) return 20;
  if (etaMinutes <= 15) return 30;
  if (etaMinutes <= 60) return 60;
  return 120;
}
