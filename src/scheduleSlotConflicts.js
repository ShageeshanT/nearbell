// Return true if a proposed slot (offset minutes) conflicts with any
// existing slot in the list using a tolerance window. Returns false
// for missing or empty inputs.
export function scheduleSlotConflicts(proposedOffset, existingSlots, toleranceMinutes = 0) {
  if (proposedOffset == null || !Array.isArray(existingSlots)) return false;
  if (!Number.isFinite(proposedOffset)) return false;
  const tol = Number.isFinite(toleranceMinutes) ? Math.abs(toleranceMinutes) : 0;
  for (const slot of existingSlots) {
    const n = Number(slot);
    if (!Number.isFinite(n)) continue;
    if (Math.abs(n - proposedOffset) <= tol) return true;
  }
  return false;
}
