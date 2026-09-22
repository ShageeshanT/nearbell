/**
 * Decays an ETA's confidence over time when no fresh location update has
 * arrived, so stale estimates get visibly less trustworthy.
 */
function decayConfidence(baseConfidence, ageMs, halfLifeMs = 60000) {
  const decayFactor = Math.pow(0.5, ageMs / halfLifeMs);
  return Number((baseConfidence * decayFactor).toFixed(3));
}

module.exports = { decayConfidence };
