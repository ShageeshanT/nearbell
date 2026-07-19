export function arrivalBuffer(etaSeconds = 0, padSeconds = 90) {
  const eta = Math.max(0, Number(etaSeconds) || 0);
  const pad = Math.max(0, Number(padSeconds) || 0);
  return Math.max(0, eta - pad);
}