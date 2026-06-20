export function createHistoryEntry(destination, minutes) {
  return { destination, minutes, type: "arrival-alert" };
}
