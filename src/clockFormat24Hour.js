// Format a Date into a 24-hour HH:MM string. Returns null for invalid input.
// Used by NearBell alert copy when showing the clock time of arrival.
export function clockFormat24Hour(date) {
  if (date == null || !(date instanceof Date)) return null;
  if (Number.isNaN(date.getTime())) return null;

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
