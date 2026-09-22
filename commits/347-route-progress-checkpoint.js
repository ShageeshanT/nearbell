/**
 * Tracks which progress checkpoints (25%, 50%, 75%, 90%) a trip has
 * already crossed, so we only fire a milestone event once per trip.
 */
function checkCheckpoints(progressPercent, firedSet = new Set(), thresholds = [25, 50, 75, 90]) {
  const newlyFired = [];

  thresholds.forEach((threshold) => {
    if (progressPercent >= threshold && !firedSet.has(threshold)) {
      firedSet.add(threshold);
      newlyFired.push(threshold);
    }
  });

  return { firedSet, newlyFired };
}

module.exports = { checkCheckpoints };
