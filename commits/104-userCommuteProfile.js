// Builds a lightweight commute profile from a user's repeated trip history.
function buildCommuteProfile(trips) {
  const routeCounts = {};
  for (const trip of trips) {
    routeCounts[trip.routeId] = (routeCounts[trip.routeId] || 0) + 1;
  }
  const favoriteRouteId = Object.keys(routeCounts).sort((a, b) => routeCounts[b] - routeCounts[a])[0];
  return { favoriteRouteId, totalTrips: trips.length };
}

module.exports = { buildCommuteProfile };
