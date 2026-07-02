export function alertLeadTime(offsetMinutes, etaMinutes) {
  const offset = Number(offsetMinutes);
  const eta = Number(etaMinutes);
  if (!Number.isFinite(offset) || !Number.isFinite(eta)) return null;
  return Math.max(0, Math.round(eta - offset));
}
