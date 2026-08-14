// Picks push vs sound vs vibration based on user settings and device state
export function selectChannel(settings, isScreenOn) {
  if (settings.silent) return "none";
  if (isScreenOn) return "banner";
  return settings.vibrate ? "vibration" : "sound";
}
