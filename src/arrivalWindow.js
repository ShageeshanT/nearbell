export function arrivalWindowLabel(minutes) {
  return minutes <= 0 ? "arriving now" : minutes <= 5 ? "almost there" : minutes <= 15 ? "getting close" : "en route";
}
