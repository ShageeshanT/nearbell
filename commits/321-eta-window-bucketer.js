// Buckets an ETA into a coarse display window like "now", "soon", or "later"
export function etaBucket(minutes) {
  if (minutes <= 2) return "now";
  if (minutes <= 15) return "soon";
  return "later";
}
