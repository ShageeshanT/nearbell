/**
 * Determines whether a route is currently operating, based on
 * its service window(s) for the day of week.
 */
function isRouteActiveNow(route, now = new Date()) {
  const day = now.getDay();
  const windows = route.serviceWindows[day] || [];
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  return windows.some((w) => minutesNow >= w.start && minutesNow <= w.end);
}

module.exports = { isRouteActiveNow };
