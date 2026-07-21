// Render a one-line description of traffic conditions given a
// severity tier. Returns null for unknown tiers.
export function trafficFlowDescription(tier) {
  switch (tier) {
    case 'clear': return 'Traffic is flowing normally.';
    case 'light': return 'Light traffic on your route.';
    case 'moderate': return 'Moderate traffic — expect a few extra minutes.';
    case 'heavy': return 'Heavy traffic — leave a little earlier.';
    case 'severe': return 'Severe delays — consider an alternate route.';
    default: return null;
  }
}