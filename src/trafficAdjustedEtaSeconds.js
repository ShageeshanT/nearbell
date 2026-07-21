// Compute a traffic-adjusted ETA from a base estimate (seconds) and
// a multiplicative traffic factor. 1.0 means no traffic, 1.5 means
// +50% travel time. Returns null for bad input.
export function trafficAdjustedEtaSeconds(baseSeconds, trafficFactor) {
  if (baseSeconds == null || trafficFactor == null) return null;
  if (Number.isNaN(baseSeconds) || Number.isNaN(trafficFactor)) return null;
  if (baseSeconds < 0 || trafficFactor < 0) return null;

  return Math.round(baseSeconds * trafficFactor);
}