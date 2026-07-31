// Chooses an alert sound profile based on urgency and user device settings.
function pickSoundProfile(urgency, silentModeOn) {
  if (silentModeOn) return 'vibrate_only';
  return urgency === 'high' ? 'chime_urgent' : 'chime_default';
}

module.exports = { pickSoundProfile };
