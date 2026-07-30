// Formats distance/time strings according to the user's preferred locale/unit system.
function formatDistance(meters, useImperial = false) {
  if (useImperial) {
    const feet = meters * 3.28084;
    return feet >= 528 ? `${(feet / 5280).toFixed(1)} mi` : `${Math.round(feet)} ft`;
  }
  return meters >= 1000 ? `${(meters / 1000).toFixed(1)} km` : `${Math.round(meters)} m`;
}

module.exports = { formatDistance };
