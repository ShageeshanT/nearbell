export function confidenceLabel(score) {
  return score >= 0.85 ? "high" : score >= 0.55 ? "medium" : "low";
}
