'use strict';

function isFiniteNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
}

/**
 * Throws a descriptive error if the geofence object is malformed.
 * @param {object} fence
 */
function validateGeofence(fence) {
  if (!fence || typeof fence !== 'object') {
    throw new Error('geofence must be an object');
  }
  if (!fence.center || !isFiniteNumber(fence.center.lat) || !isFiniteNumber(fence.center.lng)) {
    throw new Error(`geofence "${fence.name || '?'}" needs center.lat and center.lng as numbers`);
  }
  if (fence.center.lat < -90 || fence.center.lat > 90) {
    throw new Error(`geofence "${fence.name || '?'}" has an out-of-range latitude`);
  }
  if (fence.center.lng < -180 || fence.center.lng > 180) {
    throw new Error(`geofence "${fence.name || '?'}" has an out-of-range longitude`);
  }
  if (!isFiniteNumber(fence.radiusMeters) || fence.radiusMeters <= 0) {
    throw new Error(`geofence "${fence.name || '?'}" needs a positive radiusMeters`);
  }
  if (fence.alertLeadSeconds !== undefined && !isFiniteNumber(fence.alertLeadSeconds)) {
    throw new Error(`geofence "${fence.name || '?'}" alertLeadSeconds must be a number if set`);
  }
  return true;
}

module.exports = { validateGeofence, isFiniteNumber };
