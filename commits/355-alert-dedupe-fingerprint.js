/**
 * Builds a stable fingerprint string for an alert so duplicates can be
 * detected even across app restarts, by hashing the meaningful fields.
 */
function alertFingerprint(alert) {
  const bucket = Math.floor((alert.timestamp || 0) / 60000);
  const raw = [alert.routeId, alert.stopId, alert.type, bucket].join('|');

  let hash = 0;
  for (let i = 0; i < raw.length; i += 1) {
    hash = (hash * 31 + raw.charCodeAt(i)) | 0;
  }

  return `af_${Math.abs(hash).toString(16)}`;
}

module.exports = { alertFingerprint };
