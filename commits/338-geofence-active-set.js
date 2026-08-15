// Maintains the set of currently-active fence ids as entries and exits are processed
export function updateActiveSet(activeIds, fenceId, isEntering) {
  const next = new Set(activeIds);
  if (isEntering) next.add(fenceId);
  else next.delete(fenceId);
  return next;
}
