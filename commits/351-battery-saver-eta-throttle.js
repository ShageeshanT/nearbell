/**
 * Picks a location polling interval based on battery level, so low
 * battery devices poll less often and preserve charge near arrival time.
 */
function pickPollIntervalMs(batteryPercent, etaSeconds) {
  const isCloseToArrival = etaSeconds < 5 * 60;

  if (batteryPercent > 40 || isCloseToArrival) {
    return 10000;
  }

  if (batteryPercent > 15) {
    return 30000;
  }

  return 60000;
}

module.exports = { pickPollIntervalMs };
