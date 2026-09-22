/**
 * Produces a 0-1 quality score for a raw GPS fix, so downstream logic can
 * discount or ignore low-confidence positions instead of trusting them
 * blindly.
 */
function scoreFixQuality(fix) {
  const accuracyScore = clamp01(1 - (fix.accuracyMeters || 50) / 50);
  const satelliteScore = clamp01((fix.satellites || 0) / 8);
  const ageScore = clamp01(1 - (fix.ageMs || 0) / 10000);

  return Number(((accuracyScore * 0.5) + (satelliteScore * 0.2) + (ageScore * 0.3)).toFixed(2));
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

module.exports = { scoreFixQuality };
