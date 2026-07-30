// Fires a proximity alert once the user crosses within a configured radius of a stop.
function shouldAlertProximity(distanceMeters, alertRadiusMeters, alreadyAlerted) {
  return !alreadyAlerted && distanceMeters <= alertRadiusMeters;
}

module.exports = { shouldAlertProximity };
