/**
 * Summarizes a stop's accessibility features into a short
 * set of icon flags for the stop detail view.
 */
function accessibilityFlags(stop) {
  const flags = [];
  if (stop.wheelchairAccessible) flags.push('wheelchair');
  if (stop.hasShelter) flags.push('shelter');
  if (stop.hasSeating) flags.push('seating');
  if (stop.hasLighting) flags.push('lighting');
  return flags;
}

module.exports = { accessibilityFlags };
