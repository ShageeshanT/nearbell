// Render a schedule slot (offset minutes from "now") as a short
// human label. Returns null for missing or non-finite input.
export function scheduleSlotLabel(offsetMinutes) {
  if (offsetMinutes == null) return null;
  if (!Number.isFinite(offsetMinutes)) return null;
  if (offsetMinutes < 0) return null;
  if (offsetMinutes === 0) return 'now';
  if (offsetMinutes < 60) return `in ${offsetMinutes}m`;
  const hours = Math.floor(offsetMinutes / 60);
  const mins = offsetMinutes % 60;
  if (mins === 0) return `in ${hours}h`;
  return `in ${hours}h${mins}m`;
}
