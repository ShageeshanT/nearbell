export function arrivalWindowCopy({ fromMinutes, toMinutes } = {}) {
  const from = Number(fromMinutes);
  const to = Number(toMinutes);
  if (!Number.isFinite(from) || !Number.isFinite(to)) return 'Arrival window is still being calculated.';
  if (from === to) return `Expected arrival in ${from} min.`;
  return `Expected arrival in ${from}-${to} min.`;
}
