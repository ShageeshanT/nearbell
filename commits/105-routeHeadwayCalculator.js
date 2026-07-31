// Calculates the average headway (gap) between consecutive scheduled departures.
function averageHeadwayMinutes(departureTimestampsMs) {
  if (departureTimestampsMs.length < 2) return null;
  const sorted = [...departureTimestampsMs].sort((a, b) => a - b);
  let totalGap = 0;
  for (let i = 1; i < sorted.length; i++) {
    totalGap += sorted[i] - sorted[i - 1];
  }
  return Math.round(totalGap / (sorted.length - 1) / 60000);
}

module.exports = { averageHeadwayMinutes };
