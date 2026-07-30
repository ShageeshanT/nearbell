// Lowers an alert's priority the longer it goes unacknowledged.
function decayedPriority(basePriority, minutesSinceCreated, decayPerMinute = 0.02) {
  const decayed = basePriority - minutesSinceCreated * decayPerMinute;
  return Math.max(0, decayed);
}

module.exports = { decayedPriority };
