/**
 * Drops ETA samples that deviate too far from the running
 * median, to keep sudden GPS glitches from spiking the display.
 */
function rejectEtaOutliers(samples, maxDeviationMinutes = 5) {
  if (samples.length < 3) return samples;

  const sorted = [...samples].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];

  return samples.filter((s) => Math.abs(s - median) <= maxDeviationMinutes);
}

module.exports = { rejectEtaOutliers };
