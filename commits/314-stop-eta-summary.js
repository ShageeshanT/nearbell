// Builds a compact summary object for displaying a stop's ETA in the UI list
export function stopEtaSummary(stop, etaMinutes, confidence) {
  return { id: stop.id, name: stop.name, etaMinutes: Math.round(etaMinutes), confidence: Math.round(confidence * 100) };
}
