export function canNotify(lastSentMs, nowMs = Date.now(), cooldownMs = 30000) {
  return nowMs - lastSentMs >= cooldownMs;
}
