export function confirmArrival(consecutiveHits, requiredHits = 3) {
  return consecutiveHits >= requiredHits;
}
