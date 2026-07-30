// Normalizes arrival timestamps to the user's local timezone offset.
function toLocalMinutes(utcTimestampMs, tzOffsetMinutes) {
  const localMs = utcTimestampMs + tzOffsetMinutes * 60 * 1000;
  return new Date(localMs);
}

function formatLocalTime(utcTimestampMs, tzOffsetMinutes) {
  const d = toLocalMinutes(utcTimestampMs, tzOffsetMinutes);
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

module.exports = { toLocalMinutes, formatLocalTime };
