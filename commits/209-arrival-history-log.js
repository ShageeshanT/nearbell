export function buildArrivalLogEntry(placeName, arrivedAtMs = Date.now()) {
  return { placeName, arrivedAtMs, iso: new Date(arrivedAtMs).toISOString() };
}
