// Return true if two schedule windows [start, end) overlap. Missing
// or malformed windows do not overlap.
export function scheduleWindowOverlaps(a, b) {
  if (!a || !b) return false;
  const aStart = Number(a.startMinutes);
  const aEnd = Number(a.endMinutes);
  const bStart = Number(b.startMinutes);
  const bEnd = Number(b.endMinutes);
  if (![aStart, aEnd, bStart, bEnd].every(Number.isFinite)) return false;
  if (aEnd <= aStart || bEnd <= bStart) return false;
  return aStart < bEnd && bStart < aEnd;
}
