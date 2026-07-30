// Ranks nearby stops by a blend of distance and how frequently the user visits them.
function rankStops(stops) {
  return [...stops].sort((a, b) => {
    const scoreA = a.distanceMeters - (a.visitCount || 0) * 25;
    const scoreB = b.distanceMeters - (b.visitCount || 0) * 25;
    return scoreA - scoreB;
  });
}

module.exports = { rankStops };
