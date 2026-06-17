export function normalizeOffsets(offsets) {
  if (!Array.isArray(offsets)) return [];
  return [...new Set(offsets.map(Number).filter((value) => Number.isFinite(value) && value > 0))].sort((a, b) => b - a);
}
export function isValidOffset(value) { return Number.isFinite(Number(value)) && Number(value) > 0 && Number(value) <= 240; }
