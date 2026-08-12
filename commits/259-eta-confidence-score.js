// Scores ETA reliability 0-1 based on GPS signal quality and traffic volatility
export function etaConfidenceScore(gpsAccuracyMeters, trafficVolatility) {
  const gpsScore = Math.max(0, 1 - gpsAccuracyMeters / 50);
  const trafficScore = Math.max(0, 1 - trafficVolatility);
  return Math.round(((gpsScore + trafficScore) / 2) * 100) / 100;
}
