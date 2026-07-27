/**
 * Toggles a route id in/out of a favorites set, returning a
 * new set (immutable update, easy to use with state stores).
 */
function toggleFavoriteRoute(favorites, routeId) {
  const next = new Set(favorites);
  if (next.has(routeId)) {
    next.delete(routeId);
  } else {
    next.add(routeId);
  }
  return next;
}

module.exports = { toggleFavoriteRoute };
