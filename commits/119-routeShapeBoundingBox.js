// Computes the bounding box for a route's shape points, useful for map camera framing.
function boundingBox(points) {
  const lats = points.map(p => p.lat);
  const lngs = points.map(p => p.lng);
  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLng: Math.min(...lngs),
    maxLng: Math.max(...lngs),
  };
}

module.exports = { boundingBox };
