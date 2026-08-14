// Counts how many times a saved stop has been visited, for frequency-based sorting
export function incrementVisit(counts, stopId) {
  return { ...counts, [stopId]: (counts[stopId] || 0) + 1 };
}
