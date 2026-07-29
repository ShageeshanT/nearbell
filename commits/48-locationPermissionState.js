/**
 * Normalizes platform-specific location permission strings
 * into a consistent set the rest of the app can branch on.
 */
function normalizePermissionState(rawState) {
  const granted = ['granted', 'authorizedAlways', 'authorizedWhenInUse'];
  const denied = ['denied', 'restricted', 'blocked'];

  if (granted.includes(rawState)) return 'granted';
  if (denied.includes(rawState)) return 'denied';
  return 'undetermined';
}

module.exports = { normalizePermissionState };
