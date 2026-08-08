export function adjustEtaForSpeed(baseEtaMinutes, currentKmh, avgKmh) {
  if (!avgKmh || currentKmh <= 0) return baseEtaMinutes;
  return baseEtaMinutes * (avgKmh / currentKmh);
}
