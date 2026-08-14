// Widens GPS polling interval as battery drops to conserve power
export function pollIntervalMs(batteryLevelPct) {
  if (batteryLevelPct > 50) return 5000;
  if (batteryLevelPct > 20) return 15000;
  return 30000;
}
