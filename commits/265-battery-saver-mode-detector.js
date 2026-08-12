// Detects if the device is in a low-power state that may throttle GPS updates
export function isLowPowerMode(batteryLevelPct, isCharging) {
  return !isCharging && batteryLevelPct <= 20;
}
