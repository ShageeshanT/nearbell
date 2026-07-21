// Has traffic gotten worse between two severity tiers?
// Returns true if the second tier is more severe than the first.
export function trafficIsWorseThan(previousTier, currentTier) {
  const order = ['clear', 'light', 'moderate', 'heavy', 'severe'];
  const prev = order.indexOf(previousTier);
  const curr = order.indexOf(currentTier);
  if (prev === -1 || curr === -1) return null;
  return curr > prev;
}