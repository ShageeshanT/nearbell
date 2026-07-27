/**
 * Scores how "close" a stop is on a 0-100 scale, inverse to
 * distance, for sorting nearby-stop lists.
 */
function stopProximityScore(distanceMeters, maxDistanceMeters = 2000) {
  if (distanceMeters <= 0) return 100;
  if (distanceMeters >= maxDistanceMeters) return 0;

  const ratio = 1 - distanceMeters / maxDistanceMeters;
  return Math.round(ratio * 100);
}

module.exports = { stopProximityScore };
