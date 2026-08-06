'use strict';

/**
 * Estimate time-to-arrival in seconds, given a distance and a speed.
 * @param {number} distanceMeters
 * @param {number} speedMetersPerSecond
 * @returns {number} seconds, or Infinity if not moving toward the target
 */
function estimateEtaSeconds(distanceMeters, speedMetersPerSecond) {
  if (distanceMeters <= 0) return 0;
  if (!speedMetersPerSecond || speedMetersPerSecond <= 0) return Infinity;
  return distanceMeters / speedMetersPerSecond;
}

/**
 * Convert km/h to m/s.
 */
function kmhToMs(kmh) {
  return (kmh * 1000) / 3600;
}

/**
 * Format seconds as a short human string ("45s", "12m", "1h 5m").
 */
function formatEta(seconds) {
  if (!isFinite(seconds)) return '—';
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins ? `${hrs}h ${remMins}m` : `${hrs}h`;
}

module.exports = { estimateEtaSeconds, kmhToMs, formatEta };
