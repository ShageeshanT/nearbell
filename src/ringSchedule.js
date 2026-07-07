export function ringSchedule(thresholds = [15, 5]) {
  return thresholds
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value > 0)
    .sort((a, b) => b - a);
}
