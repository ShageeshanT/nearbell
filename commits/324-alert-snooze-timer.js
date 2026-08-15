// Computes when a snoozed alert should be reconsidered
export function snoozeUntilMs(nowMs, snoozeMinutes) {
  return nowMs + snoozeMinutes * 60 * 1000;
}
