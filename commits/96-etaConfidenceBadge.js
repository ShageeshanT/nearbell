// Maps a numeric ETA confidence score to a UI badge label.
function confidenceBadge(score) {
  if (score >= 0.8) return 'high';
  if (score >= 0.5) return 'medium';
  return 'low';
}

module.exports = { confidenceBadge };
