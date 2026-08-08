export function extendArrivalWindow(currentEndMs, extraMinutes) {
  return currentEndMs + extraMinutes * 60000;
}
