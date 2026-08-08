export function alertPriorityCompare(a, b) {
  return (b.severity - a.severity) || (a.etaMinutes - b.etaMinutes);
}
