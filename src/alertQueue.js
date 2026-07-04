export function nextQueuedAlert(offsets = [], etaMinutes = 0) {
  const eta = Number(etaMinutes);
  return offsets
    .map(Number)
    .filter((offset) => Number.isFinite(offset) && offset >= 0 && offset <= eta)
    .sort((a, b) => b - a)[0] ?? null;
}
