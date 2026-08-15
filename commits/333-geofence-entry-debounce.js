// Requires a fence entry to hold for a minimum duration before counting it as real
export function isConfirmedEntry(insideDurationMs, minDurationMs = 5000) {
  return insideDurationMs >= minDurationMs;
}
