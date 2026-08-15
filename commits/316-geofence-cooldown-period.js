// Prevents re-triggering the same fence event within a short cooldown window
export function isInCooldown(lastFiredMs, nowMs, cooldownMs = 60000) {
  return nowMs - lastFiredMs < cooldownMs;
}
