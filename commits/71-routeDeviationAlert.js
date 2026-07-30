// Flags when the user's live position deviates too far from the expected route path.
function isOffRoute(perpendicularOffsetMeters, thresholdMeters = 60) {
  return perpendicularOffsetMeters > thresholdMeters;
}

function deviationSeverity(offsetMeters, thresholdMeters = 60) {
  const ratio = offsetMeters / thresholdMeters;
  if (ratio < 1) return 'none';
  if (ratio < 1.5) return 'minor';
  if (ratio < 2.5) return 'moderate';
  return 'severe';
}

module.exports = { isOffRoute, deviationSeverity };
