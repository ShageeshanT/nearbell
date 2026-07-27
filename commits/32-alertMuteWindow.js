/**
 * Checks whether the current time falls inside a user-defined
 * daily mute window (e.g. 22:00-07:00), including overnight spans.
 */
function isWithinMuteWindow(hour, startHour, endHour) {
  if (startHour === endHour) return false;

  if (startHour < endHour) {
    return hour >= startHour && hour < endHour;
  }
  return hour >= startHour || hour < endHour;
}

module.exports = { isWithinMuteWindow };
