/**
 * Maps a raw ETA confidence score (0-1) to a small UI badge
 * descriptor: label, color, and whether to show a caveat.
 */
function etaConfidenceBadge(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) {
    return { label: 'Unknown', color: 'gray', caveat: true };
  }

  if (score >= 0.8) {
    return { label: 'High', color: 'green', caveat: false };
  }
  if (score >= 0.5) {
    return { label: 'Moderate', color: 'amber', caveat: false };
  }
  return { label: 'Low', color: 'red', caveat: true };
}

module.exports = { etaConfidenceBadge };
