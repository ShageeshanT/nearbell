// Compute the traffic delay in seconds given a current ETA and a
// free-flow ETA. Returns 0 when current is faster or equal, null
// for bad input. Used by arrival UX to call out congestion.
export function trafficDelaySeconds(currentEtaSeconds, freeflowEtaSeconds) {
  if (currentEtaSeconds == null || freeflowEtaSeconds == null) return null;
  if (Number.isNaN(currentEtaSeconds) || Number.isNaN(freeflowEtaSeconds)) return null;
  if (currentEtaSeconds < 0 || freeflowEtaSeconds < 0) return null;

  const diff = currentEtaSeconds - freeflowEtaSeconds;
  return diff > 0 ? diff : 0;
}