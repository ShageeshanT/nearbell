'use strict';

const { haversineDistance, EARTH_RADIUS_METERS } = require('./haversine');
const units = require('./units');
const { isInsideGeofence, distanceToGeofenceEdge } = require('./geofence');
const { estimateEtaSeconds, kmhToMs, formatEta } = require('./eta');
const { shouldTriggerAlert } = require('./alertTrigger');
const { loadGeofencesFromFile, loadGeofencesFromString } = require('./configLoader');
const { validateGeofence } = require('./validate');
const { createLogger } = require('./logger');
const { evaluateAll, nearestGeofence, activeAlerts } = require('./multiGeofence');

module.exports = {
  haversineDistance,
  EARTH_RADIUS_METERS,
  ...units,
  isInsideGeofence,
  distanceToGeofenceEdge,
  estimateEtaSeconds,
  kmhToMs,
  formatEta,
  shouldTriggerAlert,
  loadGeofencesFromFile,
  loadGeofencesFromString,
  validateGeofence,
  createLogger,
  evaluateAll,
  nearestGeofence,
  activeAlerts,
};
