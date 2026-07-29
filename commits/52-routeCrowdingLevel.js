/**
 * Buckets a raw occupancy percentage into a rider-friendly
 * crowding level for display.
 */
function crowdingLevel(occupancyPercent) {
  if (occupancyPercent >= 85) return 'full';
  if (occupancyPercent >= 50) return 'busy';
  if (occupancyPercent >= 20) return 'moderate';
  return 'quiet';
}

module.exports = { crowdingLevel };
