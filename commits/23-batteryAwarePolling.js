/**
 * Picks a location-polling interval based on remaining battery,
 * so low-battery devices poll less aggressively.
 */
function pollingIntervalForBattery(batteryLevel) {
  if (batteryLevel <= 0.15) return 30000;
  if (batteryLevel <= 0.4) return 15000;
  return 5000;
}

module.exports = { pollingIntervalForBattery };
