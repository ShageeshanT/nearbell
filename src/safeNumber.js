export function clampNumber(value, min, max) {
  const n = Number(value); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min;
}
