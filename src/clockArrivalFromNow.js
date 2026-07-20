import { clockFormat24Hour } from './clockFormat24Hour.js';

// Compute the wall-clock arrival time given an ETA in seconds.
// Returns the formatted 24-hour string, or null for invalid input.
export function clockArrivalFromNow(seconds, now = new Date()) {
  if (seconds == null || Number.isNaN(seconds)) return null;
  if (!(now instanceof Date) || Number.isNaN(now.getTime())) return null;
  if (seconds < 0) return null;

  const arrival = new Date(now.getTime() + seconds * 1000);
  return clockFormat24Hour(arrival);
}
