/**
 * Watches a rolling window of ETA samples and flags when the estimate is
 * consistently drifting later, which usually means real delay, not noise.
 */
function detectEtaDrift(samples, minSamples = 4) {
  if (!Array.isArray(samples) || samples.length < minSamples) {
    return { drifting: false, trendSeconds: 0 };
  }

  let increasing = 0;
  for (let i = 1; i < samples.length; i += 1) {
    if (samples[i] > samples[i - 1]) increasing += 1;
  }

  const trendSeconds = samples[samples.length - 1] - samples[0];
  const drifting = increasing >= samples.length - 2 && trendSeconds > 60;

  return { drifting, trendSeconds };
}

module.exports = { detectEtaDrift };
