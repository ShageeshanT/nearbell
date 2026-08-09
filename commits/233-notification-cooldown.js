export function canSendNotification(lastSentTimestamp, nowTimestamp, cooldownMs = 60000) {
  return nowTimestamp - lastSentTimestamp >= cooldownMs;
}
