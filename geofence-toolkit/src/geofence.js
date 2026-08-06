'use strict';

const { haversineDistance } = require('./haversine');

/**
 * @typedef {{lat:number,lng:number}} Point
 * @typedef {{center:Point,radiusMeters:number,name?:string}} Geofence
 */

/**
 * Is the given point inside the geofence's radius?
 * @param {Point} point
 * @param {Geofence} fence
 * @returns {boolean}
 */
function isInsideGeofence(point, fence) {
  return haversineDistance(point, fence.center) <= fence.radiusMeters;
}

/**
 * Distance (meters) from the point to the edge of the geofence.
 * Negative means the point is already inside.
 */
function distanceToGeofenceEdge(point, fence) {
  return haversineDistance(point, fence.center) - fence.radiusMeters;
}

module.exports = { isInsideGeofence, distanceToGeofenceEdge };
