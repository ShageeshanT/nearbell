/**
 * Maps a route id to a display color, falling back to a
 * deterministic hashed color for routes not explicitly set.
 */
const KNOWN_ROUTE_COLORS = {
  '101': '#E63946',
  '204': '#2A9D8F',
  '309': '#F4A261',
};

function colorForRoute(routeId) {
  if (KNOWN_ROUTE_COLORS[routeId]) return KNOWN_ROUTE_COLORS[routeId];

  let hash = 0;
  for (const char of String(routeId)) {
    hash = (hash * 31 + char.charCodeAt(0)) % 360;
  }
  return `hsl(${hash}, 65%, 50%)`;
}

module.exports = { colorForRoute };
