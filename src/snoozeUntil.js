export function snoozeUntilMinutes(currentMinutes, snoozeMinutes) {
  return Math.max(0, Number(currentMinutes) - Number(snoozeMinutes));
}
