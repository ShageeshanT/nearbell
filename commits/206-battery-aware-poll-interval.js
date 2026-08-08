export function batteryAwareInterval(baseMs, batteryPct) {
  if (batteryPct <= 15) return baseMs * 3;
  if (batteryPct <= 30) return baseMs * 1.5;
  return baseMs;
}
