// Sorts a list of stops by soonest ETA first, for the upcoming-stops UI
export function sortByEta(stops) {
  return [...stops].sort((a, b) => a.etaMinutes - b.etaMinutes);
}
