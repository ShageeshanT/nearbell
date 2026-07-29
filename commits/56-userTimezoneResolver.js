/**
 * Resolves the timezone to use for displaying schedule times,
 * preferring device timezone but allowing an explicit override.
 */
function resolveTimezone(deviceTimezone, override) {
  return override || deviceTimezone || 'UTC';
}

module.exports = { resolveTimezone };
