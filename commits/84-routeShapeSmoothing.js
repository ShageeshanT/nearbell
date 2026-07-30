// Smooths a polyline of GPS route points using a simple moving average.
function smoothPoints(points, windowSize = 3) {
  return points.map((p, i) => {
    const start = Math.max(0, i - Math.floor(windowSize / 2));
    const end = Math.min(points.length, start + windowSize);
    const slice = points.slice(start, end);
    const avgLat = slice.reduce((s, q) => s + q.lat, 0) / slice.length;
    const avgLng = slice.reduce((s, q) => s + q.lng, 0) / slice.length;
    return { lat: avgLat, lng: avgLng };
  });
}

module.exports = { smoothPoints };
