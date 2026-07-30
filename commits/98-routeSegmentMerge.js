// Merges adjacent route segments that share the same heading within a tolerance.
function shouldMergeSegments(headingA, headingB, toleranceDegrees = 10) {
  const diff = Math.abs(headingA - headingB) % 360;
  const angle = diff > 180 ? 360 - diff : diff;
  return angle <= toleranceDegrees;
}

module.exports = { shouldMergeSegments };
