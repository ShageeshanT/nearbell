/**
 * Picks a chime tone depending on how close the arrival is,
 * so "arriving now" feels distinct from a 5-minute heads up.
 */
function toneForEta(etaMinutes) {
  if (etaMinutes <= 1) return 'chime_urgent';
  if (etaMinutes <= 3) return 'chime_near';
  return 'chime_standard';
}

module.exports = { toneForEta };
