export function withinDestinationRadius(distanceMeters, radiusMeters = 800) {
  return Number(distanceMeters) >= 0 && Number(distanceMeters) <= radiusMeters;
}
