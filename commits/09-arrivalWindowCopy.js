export function arrivalWindowCopy({ destination = 'destination', minutes = 5 } = {}) {
  const eta = Math.max(0, Math.floor(Number(minutes) || 0));
  if (eta === 0) return `Arriving at ${destination} now.`;
  if (eta === 1) return `One minute to ${destination}.`;
  return `${eta} minutes to ${destination}.`;
}