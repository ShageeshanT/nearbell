// Map a severity tier to a colour token suitable for the arrival
// UI. Returns null for unknown tiers so the UI can fall back.
export function trafficColorForSeverity(tier) {
  switch (tier) {
    case 'clear': return '#1f9d55';
    case 'light': return '#7cb342';
    case 'moderate': return '#f4b400';
    case 'heavy': return '#e07a16';
    case 'severe': return '#c0392b';
    default: return null;
  }
}