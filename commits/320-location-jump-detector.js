// Detects an implausible position jump that suggests a bad GPS fix
export function isImplausibleJump(prevPos, newPos, deltaSeconds, maxSpeedKmh, distanceFn) {
  if (deltaSeconds <= 0) return false;
  const distanceKm = distanceFn(prevPos, newPos) / 1000;
  const impliedSpeedKmh = distanceKm / (deltaSeconds / 3600);
  return impliedSpeedKmh > maxSpeedKmh;
}
