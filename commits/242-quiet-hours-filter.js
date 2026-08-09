export function isWithinQuietHours(hour24, quietStartHour = 22, quietEndHour = 7) {
  if (quietStartHour < quietEndHour) {
    return hour24 >= quietStartHour && hour24 < quietEndHour;
  }
  return hour24 >= quietStartHour || hour24 < quietEndHour;
}
