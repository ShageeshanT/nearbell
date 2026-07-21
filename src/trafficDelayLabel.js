// Render a delay-in-seconds value as user-facing copy like
// "+5 min delay". Returns null for bad input and "no delay" for 0.
export function trafficDelayLabel(delaySeconds) {
  if (delaySeconds == null || Number.isNaN(delaySeconds)) return null;
  if (delaySeconds < 0) return null;
  if (delaySeconds === 0) return 'no delay';

  const minutes = Math.round(delaySeconds / 60);
  if (minutes <= 1) return '+1 min delay';
  return `+${minutes} min delay`;
}