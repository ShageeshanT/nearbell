/**
 * Filters a list of stops down to those within a max distance
 * of the user, sorted closest first.
 */
function nearbyStops(stops, distanceFn, maxDistanceMeters = 1500) {
  return stops
    .map((stop) => ({ stop, distance: distanceFn(stop) }))
    .filter((entry) => entry.distance <= maxDistanceMeters)
    .sort((a, b) => a.distance - b.distance)
    .map((entry) => entry.stop);
}

module.exports = { nearbyStops };
