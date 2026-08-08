export function nextStopIndex(stops, completedIds) {
  return stops.findIndex((s) => !completedIds.includes(s.id));
}
