'use strict';

const { haversineDistance } = require('./haversine');
const { shouldTriggerAlert } = require('./alertTrigger');

/**
 * Evaluate a point against every geofence in a list.
 * @returns {Array<{fence:object,shouldAlert:boolean,reason:string,distanceMeters:number,etaSeconds:number}>}
 */
function evaluateAll(point, speedMetersPerSecond, fences) {
  return fences.map((fence) => ({
    fence,
    ...shouldTriggerAlert(point, speedMetersPerSecond, fence),
  }));
}

/**
 * Find the single closest geofence to a point (by distance to its center).
 * @returns {{fence:object,distanceMeters:number}|null}
 */
function nearestGeofence(point, fences) {
  if (!fences.length) return null;

  let best = null;
  for (const fence of fences) {
    const distanceMeters = haversineDistance(point, fence.center);
    if (!best || distanceMeters < best.distanceMeters) {
      best = { fence, distanceMeters };
    }
  }
  return best;
}

/**
 * From evaluateAll's output, return only the fences that should alert.
 */
function activeAlerts(evaluations) {
  return evaluations.filter((e) => e.shouldAlert);
}

module.exports = { evaluateAll, nearestGeofence, activeAlerts };
