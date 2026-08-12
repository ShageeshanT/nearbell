// Computes the timestamp at which a snoozed arrival alert should re-fire
export function snoozeUntil(nowMs, snoozeMinutes = 5) {
  return nowMs + snoozeMinutes * 60000;
}
