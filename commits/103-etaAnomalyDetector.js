// Flags an ETA update as anomalous if it jumps unrealistically compared to the last reading.
function isAnomalousEta(previousEtaMinutes, newEtaMinutes, maxDeltaMinutes = 10) {
  return Math.abs(newEtaMinutes - previousEtaMinutes) > maxDeltaMinutes;
}

module.exports = { isAnomalousEta };
