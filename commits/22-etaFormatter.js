/**
 * Formats a raw ETA in minutes into a human-friendly string,
 * e.g. "Arriving now", "3 min", "1 hr 5 min".
 */
function formatEta(minutes) {
  if (minutes <= 0) return 'Arriving now';
  if (minutes < 60) return `${Math.round(minutes)} min`;

  const hrs = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return mins > 0 ? `${hrs} hr ${mins} min` : `${hrs} hr`;
}

module.exports = { formatEta };
