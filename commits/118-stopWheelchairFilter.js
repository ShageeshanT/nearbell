// Filters a stop list down to only wheelchair-accessible stops.
function filterAccessibleStops(stops) {
  return stops.filter(s => s.wheelchairAccessible === true);
}

module.exports = { filterAccessibleStops };
