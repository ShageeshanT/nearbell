'use strict';

const { haversineDistance } = require('./haversine');
const { isInsideGeofence } = require('./geofence');
const { estimateEtaSeconds } = require('./eta');

/**
 * Decide whether an arrival alert should fire right now.
 *
 * Fires when either:
 *  - the user is already inside the geofence, or
 *  - the estimated time to arrival is at or under the fence's alertLeadSeconds
 *
 * @param {{lat:number,lng:number}} point current position
 * @param {number} speedMetersPerSecond current speed
 * @param {{center:object,radiusMeters:number,alertLeadSeconds?:number,name?:string}} fence
 * @returns {{shouldAlert:boolean,reason:string,distanceMeters:number,etaSeconds:number}}
 */
function shouldTriggerAlert(point, speedMetersPerSecond, fence) {
  const distanceMeters = haversineDistance(point, fence.center);
  const etaSeconds = estimateEtaSeconds(distanceMeters, speedMetersPerSecond);
  const leadSeconds = fence.alertLeadSeconds ?? 0;

  if (isInsideGeofence(point, fence)) {
    return { shouldAlert: true, reason: 'inside_geofence', distanceMeters, etaSeconds };
  }

  if (isFinite(etaSeconds) && etaSeconds <= leadSeconds) {
    return { shouldAlert: true, reason: 'eta_within_lead_time', distanceMeters, etaSeconds };
  }

  return { shouldAlert: false, reason: 'not_yet', distanceMeters, etaSeconds };
}

module.exports = { shouldTriggerAlert };
