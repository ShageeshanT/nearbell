// Calculates the safe boarding window before a scheduled departure closes.
function boardingWindowMinutes(scheduledDepartureMs, nowMs = Date.now(), bufferMinutes = 2) {
  const diffMinutes = (scheduledDepartureMs - nowMs) / 60000;
  return Math.max(0, diffMinutes - bufferMinutes);
}

module.exports = { boardingWindowMinutes };
