/**
 * Widens the effective geofence radius when recent location fixes have
 * poor accuracy, so noisy GPS doesn't cause missed or flapping triggers.
 */
function adaptiveRadius(baseRadiusMeters, recentAccuracyMeters) {
  const padding = Math.min(recentAccuracyMeters * 0.5, baseRadiusMeters);
  return Math.round(baseRadiusMeters + padding);
}

module.exports = { adaptiveRadius };
