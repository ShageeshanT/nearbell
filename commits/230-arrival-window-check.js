export function isWithinArrivalWindow(etaMinutes, windowStartMinutes, windowEndMinutes) {
  return etaMinutes >= windowStartMinutes && etaMinutes <= windowEndMinutes;
}
