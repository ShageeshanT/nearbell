// Format a Date into a 12-hour clock string like "3:42 PM".
// Returns null for invalid input.
export function clockFormat12Hour(date) {
  if (date == null || !(date instanceof Date)) return null;
  if (Number.isNaN(date.getTime())) return null;

  const raw = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = raw >= 12 ? 'PM' : 'AM';
  const hour12 = raw % 12 === 0 ? 12 : raw % 12;
  return `${hour12}:${minutes} ${period}`;
}
