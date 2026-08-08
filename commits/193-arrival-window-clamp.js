export function clampArrivalWindow(minutes, floor = 1, ceiling = 60) {
  return Math.min(ceiling, Math.max(floor, minutes));
}
