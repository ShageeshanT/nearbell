'use strict';

const fs = require('fs');
const { validateGeofence } = require('./validate');

/**
 * Load and validate an array of geofence definitions from a JSON file.
 * @param {string} filePath
 * @returns {Array<object>} validated geofences
 */
function loadGeofencesFromFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return loadGeofencesFromString(raw);
}

/**
 * Same as loadGeofencesFromFile but takes a JSON string directly
 * (useful for tests / non-file sources).
 */
function loadGeofencesFromString(jsonString) {
  const parsed = JSON.parse(jsonString);
  const list = Array.isArray(parsed) ? parsed : parsed.geofences;

  if (!Array.isArray(list)) {
    throw new Error('config must be an array of geofences, or an object with a "geofences" array');
  }

  list.forEach(validateGeofence);
  return list;
}

module.exports = { loadGeofencesFromFile, loadGeofencesFromString };
