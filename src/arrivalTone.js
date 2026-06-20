export function arrivalTone(minutes) {
  return minutes <= 0 ? "done" : minutes <= 5 ? "chime" : "soft";
}
