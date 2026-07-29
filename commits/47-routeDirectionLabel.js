/**
 * Turns a route's raw direction code into a rider-friendly
 * label, e.g. "0" -> "Northbound".
 */
const DIRECTION_LABELS = {
  0: 'Northbound',
  1: 'Southbound',
  2: 'Eastbound',
  3: 'Westbound',
};

function directionLabel(code) {
  return DIRECTION_LABELS[code] || 'Unknown direction';
}

module.exports = { directionLabel };
