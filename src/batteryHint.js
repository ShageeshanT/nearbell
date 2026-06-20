export function batteryHint(level) {
  return level <= 0.2 ? "Save battery while tracking" : "Battery looks fine";
}
