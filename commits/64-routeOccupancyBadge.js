/**
 * Formats an occupancy reading into a small badge object
 * (label + color) for the route list UI.
 */
function occupancyBadge(occupancyPercent) {
  if (occupancyPercent == null) return { label: '—', color: 'gray' };
  if (occupancyPercent >= 85) return { label: 'Full', color: 'red' };
  if (occupancyPercent >= 50) return { label: 'Busy', color: 'amber' };
  return { label: 'Seats free', color: 'green' };
}

module.exports = { occupancyBadge };
