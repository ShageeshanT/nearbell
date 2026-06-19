export function isWithinMinuteWindow(currentMinutes, targetMinutes, tolerance = 0.5) {
  return Math.abs(Number(currentMinutes) - Number(targetMinutes)) <= tolerance;
}
