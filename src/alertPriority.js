export function alertPriority(minutes) {
  return minutes <= 5 ? "urgent" : minutes <= 15 ? "soon" : "later";
}
