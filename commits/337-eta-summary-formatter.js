// Formats an ETA object into a one-line human-readable summary string
export function formatEtaSummary(stopName, etaMinutes) {
  if (etaMinutes <= 1) return `${stopName}: arriving now`;
  return `${stopName}: ${etaMinutes} min away`;
}
