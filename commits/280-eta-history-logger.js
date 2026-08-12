// Keeps a bounded rolling log of recent ETA predictions for later accuracy review
export function logEta(history, entry, maxLength = 50) {
  const updated = [...history, entry];
  return updated.length > maxLength ? updated.slice(updated.length - maxLength) : updated;
}
