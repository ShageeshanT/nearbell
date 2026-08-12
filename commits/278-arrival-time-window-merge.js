// Merges two overlapping arrival windows into one combined window
export function mergeWindows(a, b) {
  if (a.earliest > b.latest || b.earliest > a.latest) return null;
  return { earliest: Math.min(a.earliest, b.earliest), latest: Math.max(a.latest, b.latest) };
}
