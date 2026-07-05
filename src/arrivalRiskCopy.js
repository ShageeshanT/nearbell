export function arrivalRiskCopy(level = 'low') {
  if (level === 'high') return 'Arrival alert needs attention now.';
  if (level === 'medium') return 'Keep an eye on this arrival alert.';
  return 'Arrival alert looks safe.';
}
