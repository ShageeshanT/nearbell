/**
 * Turns a set of historical ETA errors into a display-friendly range
 * around the current point estimate (e.g. "4-7 min" instead of "5 min").
 */
function etaPercentileBand(pointEstimateSeconds, historicalErrorsSeconds) {
  if (!historicalErrorsSeconds || historicalErrorsSeconds.length === 0) {
    return { lowSeconds: pointEstimateSeconds, highSeconds: pointEstimateSeconds };
  }

  const sorted = [...historicalErrorsSeconds].sort((a, b) => a - b);
  const low = sorted[Math.floor(sorted.length * 0.2)];
  const high = sorted[Math.floor(sorted.length * 0.8)];

  return {
    lowSeconds: Math.max(0, pointEstimateSeconds + low),
    highSeconds: Math.max(0, pointEstimateSeconds + high),
  };
}

module.exports = { etaPercentileBand };
