export function nextAlertOffset(offsets, etaMinutes) {
  const eta = Number(etaMinutes);
  if (!Array.isArray(offsets) || !Number.isFinite(eta)) return null;
  const pending = offsets
    .map(Number)
    .filter((offset) => Number.isFinite(offset) && offset >= eta)
    .sort((a, b) => a - b);
  return pending[0] ?? null;
}
