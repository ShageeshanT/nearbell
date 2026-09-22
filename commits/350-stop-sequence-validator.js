/**
 * Validates that a list of stops along a route is in strictly increasing
 * sequence order, catching data errors before they reach the UI.
 */
function validateStopSequence(stops) {
  const issues = [];

  for (let i = 1; i < stops.length; i += 1) {
    if (stops[i].sequence <= stops[i - 1].sequence) {
      issues.push({ index: i, stopId: stops[i].id, reason: 'out-of-order sequence' });
    }
  }

  return { valid: issues.length === 0, issues };
}

module.exports = { validateStopSequence };
