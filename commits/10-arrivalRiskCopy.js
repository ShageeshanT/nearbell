export function arrivalRiskCopy({ risk = 'low', destination = 'destination' } = {}) {
  const r = String(risk).toLowerCase();
  if (r === 'high') return `Traffic risk high before ${destination}; leave buffer.`;
  if (r === 'medium') return `Traffic risk moderate before ${destination}; keep buffer.`;
  return `${destination} arrival looks steady.`;
}