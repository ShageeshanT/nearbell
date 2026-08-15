// Classifies an ETA into an urgency band used to pick alert styling
export function urgencyBand(minutes) {
  if (minutes <= 3) return "critical";
  if (minutes <= 10) return "high";
  if (minutes <= 30) return "medium";
  return "low";
}
