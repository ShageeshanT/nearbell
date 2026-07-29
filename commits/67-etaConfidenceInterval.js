/**
 * Computes a simple +/- confidence range around a point ETA
 * estimate, widening as sample variance increases.
 */
function etaConfidenceInterval(etaMinutes, sampleVariance) {
  const spread = Math.min(5, Math.sqrt(sampleVariance || 0));
  return {
    low: Math.max(0, etaMinutes - spread),
    high: etaMinutes + spread,
  };
}

module.exports = { etaConfidenceInterval };
