// Prevents repeat arrival alerts for the same stop within a cooldown window
export function canNotify(lastNotifiedAt, nowMs, cooldownMs = 60000) {
  if (lastNotifiedAt == null) return true;
  return nowMs - lastNotifiedAt >= cooldownMs;
}
