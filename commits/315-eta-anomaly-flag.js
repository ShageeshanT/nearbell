// Flags an ETA reading as anomalous if it swings too fast between consecutive polls
export function isAnomalousEta(prevEta, currEta, maxSwingPerPollMinutes = 8) {
  return Math.abs(currEta - prevEta) > maxSwingPerPollMinutes;
}
