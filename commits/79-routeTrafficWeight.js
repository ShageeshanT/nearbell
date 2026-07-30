// Weights ETA predictions based on current traffic condition level.
const TRAFFIC_MULTIPLIERS = { light: 1.0, moderate: 1.2, heavy: 1.5, severe: 1.9 };

function applyTrafficWeight(baseEtaMinutes, trafficLevel = 'light') {
  const mult = TRAFFIC_MULTIPLIERS[trafficLevel] || 1.0;
  return Math.round(baseEtaMinutes * mult);
}

module.exports = { applyTrafficWeight, TRAFFIC_MULTIPLIERS };
