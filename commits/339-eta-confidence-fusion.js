/**
 * Fuses ETA estimates from multiple sources (GPS trend, schedule, traffic
 * model) into a single confidence-weighted arrival estimate.
 */
function fuseEtaEstimates(estimates) {
  if (!Array.isArray(estimates) || estimates.length === 0) {
    return null;
  }

  const totalWeight = estimates.reduce((sum, e) => sum + (e.confidence || 0), 0);
  if (totalWeight <= 0) {
    return estimates[0].etaSeconds;
  }

  const weightedSum = estimates.reduce(
    (sum, e) => sum + e.etaSeconds * (e.confidence || 0),
    0
  );

  return Math.round(weightedSum / totalWeight);
}

module.exports = { fuseEtaEstimates };
