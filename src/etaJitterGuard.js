// Decide whether an ETA delta is large enough to be worth surfacing.
// Small jitter (under threshold) is treated as noise and ignored.
export function etaJitterGuard(deltaSeconds, thresholdSeconds = 60) {
  if (deltaSeconds == null || Number.isNaN(deltaSeconds)) {
    return { significant: false, magnitude: 0 };
  }
  const t = Math.max(0, Number(thresholdSeconds) || 0);
  const magnitude = Math.abs(deltaSeconds);
  return {
    significant: magnitude >= t,
    magnitude,
  };
}
