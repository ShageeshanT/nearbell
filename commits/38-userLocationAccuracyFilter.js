/**
 * Rejects GPS fixes with poor accuracy so noisy readings don't
 * pollute ETA calculations.
 */
function isAccurateFix(fix, maxAccuracyMeters = 50) {
  return typeof fix.accuracy === 'number' && fix.accuracy <= maxAccuracyMeters;
}

function filterAccurateFixes(fixes, maxAccuracyMeters = 50) {
  return fixes.filter((fix) => isAccurateFix(fix, maxAccuracyMeters));
}

module.exports = { isAccurateFix, filterAccurateFixes };
