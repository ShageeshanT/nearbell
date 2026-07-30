// Escalates an unacknowledged alert to a stronger notification style after repeated misses.
function escalationLevel(missedCount) {
  if (missedCount >= 3) return 'critical';
  if (missedCount >= 1) return 'elevated';
  return 'normal';
}

module.exports = { escalationLevel };
