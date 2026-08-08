export function isStationary(speedKmh, thresholdKmh = 1.5) {
  return speedKmh >= 0 && speedKmh < thresholdKmh;
}
