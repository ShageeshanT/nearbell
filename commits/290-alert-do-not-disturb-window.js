// Silences non-urgent arrival alerts during the user's configured quiet hours
export function isDndActive(nowHour, dndStartHour, dndEndHour) {
  if (dndStartHour === dndEndHour) return false;
  if (dndStartHour < dndEndHour) return nowHour >= dndStartHour && nowHour < dndEndHour;
  return nowHour >= dndStartHour || nowHour < dndEndHour;
}
