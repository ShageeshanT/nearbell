export function progressDelta(previousMeters, currentMeters) {
  const before = Math.max(0, Number(previousMeters));
  const current = Math.max(0, Number(currentMeters));
  return { meters: before - current, movingCloser: current < before };
}
