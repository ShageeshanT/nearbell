// Rounds raw ETA seconds into user-friendly minute buckets for display.
function displayEtaMinutes(rawSeconds) {
  if (rawSeconds < 60) return 'now';
  const minutes = Math.round(rawSeconds / 60);
  return `${minutes} min`;
}

module.exports = { displayEtaMinutes };
