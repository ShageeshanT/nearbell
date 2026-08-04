export function alertCooldown(lastAlertAt, now = Date.now(), cooldownMinutes = 3) {
  if (!lastAlertAt) return true;
  return now - lastAlertAt >= cooldownMinutes * 60_000;
}
