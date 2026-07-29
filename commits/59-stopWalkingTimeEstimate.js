/**
 * Estimates walking time to a stop from distance, using an
 * average walking speed with a small buffer for street crossings.
 */
function estimateWalkingMinutes(distanceMeters, walkSpeedMps = 1.3) {
  const seconds = distanceMeters / walkSpeedMps;
  return Math.ceil(seconds / 60) + 1;
}

module.exports = { estimateWalkingMinutes };
