/**
 * Applies exponential smoothing to raw ETA readings so the
 * countdown doesn't jitter wildly between GPS updates.
 */
function createEtaSmoother(alpha = 0.3) {
  let smoothed = null;

  return {
    next(rawEta) {
      smoothed = smoothed === null ? rawEta : alpha * rawEta + (1 - alpha) * smoothed;
      return smoothed;
    },
  };
}

module.exports = { createEtaSmoother };
