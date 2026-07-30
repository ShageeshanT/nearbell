// Estimates walking time in minutes from a straight-line distance, accounting for path inefficiency.
function estimateWalkMinutes(straightLineMeters, pathFactor = 1.3, walkSpeedMps = 1.35) {
  const pathMeters = straightLineMeters * pathFactor;
  return Math.round(pathMeters / walkSpeedMps / 60);
}

module.exports = { estimateWalkMinutes };
