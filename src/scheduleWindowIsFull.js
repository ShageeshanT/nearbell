// Return true when a schedule window already holds the maximum number
// of allowed slots. Maximum defaults to 8 when not specified.
export function scheduleWindowIsFull(window, maxSlots = 8) {
  if (!window || typeof window !== 'object') return false;
  const slots = Array.isArray(window.slots) ? window.slots : [];
  const cap = Number.isFinite(maxSlots) && maxSlots >= 0 ? maxSlots : 8;
  return slots.length >= cap;
}
