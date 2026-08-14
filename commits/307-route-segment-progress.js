// Finds which route segment the current position falls within, by cumulative distance
export function currentSegmentIndex(segmentDistances, traveledMeters) {
  let cumulative = 0;
  for (let i = 0; i < segmentDistances.length; i++) {
    cumulative += segmentDistances[i];
    if (traveledMeters <= cumulative) return i;
  }
  return segmentDistances.length - 1;
}
