/**
 * Compares recent ETA samples to say whether the arrival is
 * trending sooner, later, or holding steady.
 */
function etaTrend(samples, thresholdMinutes = 0.5) {
  if (samples.length < 2) return 'steady';

  const first = samples[0];
  const last = samples[samples.length - 1];
  const delta = last - first;

  if (delta <= -thresholdMinutes) return 'improving';
  if (delta >= thresholdMinutes) return 'worsening';
  return 'steady';
}

module.exports = { etaTrend };
