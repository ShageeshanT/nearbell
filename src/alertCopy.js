export function alertCopy(destination = 'destination', minutes = 5) {
  const eta = Number(minutes);
  if (!Number.isFinite(eta)) return `You are nearing ${destination}.`;
  if (eta <= 2) return `${destination} is almost here.`;
  return `${destination} is about ${eta} minutes away.`;
}
