export function trimArrivalHistory(history, maxEntries = 50) {
  if (history.length <= maxEntries) return history;
  return history.slice(history.length - maxEntries);
}
