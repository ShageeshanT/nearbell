export function arrivalThreshold({ etaMinutes = 0, distanceMeters = 0 } = {}) {
  return Math.max(etaMinutes <= 5 ? 1 : 0, distanceMeters <= 500 ? 1 : 0) === 1;
}
