// Tracks per-stop cooldown timestamps so the same alert can't spam repeatedly
export function markFired(cooldowns, stopId, nowMs) {
  return { ...cooldowns, [stopId]: nowMs };
}
