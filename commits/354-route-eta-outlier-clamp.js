/**
 * Clamps a new ETA sample so it can't move more than a fixed amount away
 * from the last stable estimate in one step, smoothing out spikes.
 */
function clampEtaSample(newEtaSeconds, lastStableEtaSeconds, maxJumpSeconds = 90) {
  const diff = newEtaSeconds - lastStableEtaSeconds;

  if (Math.abs(diff) <= maxJumpSeconds) {
    return newEtaSeconds;
  }

  return lastStableEtaSeconds + Math.sign(diff) * maxJumpSeconds;
}

module.exports = { clampEtaSample };
