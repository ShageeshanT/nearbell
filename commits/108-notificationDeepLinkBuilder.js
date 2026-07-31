// Builds an in-app deep link URL so tapping a notification opens the right stop/route screen.
function buildDeepLink(stopId, routeId) {
  const params = new URLSearchParams({ stop: stopId, route: routeId });
  return `nearbell://arrival?${params.toString()}`;
}

module.exports = { buildDeepLink };
