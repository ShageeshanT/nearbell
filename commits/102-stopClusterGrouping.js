// Groups nearby stops into a single cluster when they're within a small radius of each other.
function clusterStops(stops, clusterRadiusMeters = 40) {
  const clusters = [];
  for (const stop of stops) {
    const existing = clusters.find(c =>
      Math.hypot(c.lat - stop.lat, c.lng - stop.lng) * 111000 < clusterRadiusMeters
    );
    if (existing) {
      existing.stops.push(stop);
    } else {
      clusters.push({ lat: stop.lat, lng: stop.lng, stops: [stop] });
    }
  }
  return clusters;
}

module.exports = { clusterStops };
