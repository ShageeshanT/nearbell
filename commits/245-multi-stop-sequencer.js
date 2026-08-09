export function sortStopsByEta(stops) {
  return [...stops].sort((a, b) => a.etaMinutes - b.etaMinutes);
}
