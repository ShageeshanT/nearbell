// Add a whole number of minutes to a Date and return a new Date.
// Returns null for invalid input. Mutates nothing.
export function clockAddMinutes(date, minutes) {
  if (date == null || !(date instanceof Date)) return null;
  if (Number.isNaN(date.getTime())) return null;
  if (minutes == null || Number.isNaN(minutes)) return null;
  if (typeof minutes !== 'number') return null;

  return new Date(date.getTime() + minutes * 60 * 1000);
}
