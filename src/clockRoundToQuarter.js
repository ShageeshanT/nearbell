// Snap a Date to the nearest quarter-hour (0, 15, 30, 45).
// Used to keep arrival clock copy stable across refresh ticks so
// "arrive 3:42 PM" does not flicker to "3:43 PM" every second.
export function clockRoundToQuarter(date) {
  if (date == null || !(date instanceof Date)) return null;
  if (Number.isNaN(date.getTime())) return null;

  const ms = date.getTime();
  const fifteenMin = 15 * 60 * 1000;
  const rounded = Math.round(ms / fifteenMin) * fifteenMin;
  return new Date(rounded);
}
