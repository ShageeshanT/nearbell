// Orders multiple saved stops by remaining distance along the route
export function sequenceStops(stops) {
  return [...stops].sort((a, b) => a.remainingDistanceMeters - b.remainingDistanceMeters);
}
