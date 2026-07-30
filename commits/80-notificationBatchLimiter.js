// Caps how many push notifications a user receives within a rolling time window.
function canSendNotification(sentTimestamps, maxPerWindow = 5, windowMs = 3600000) {
  const now = Date.now();
  const recent = sentTimestamps.filter(t => now - t < windowMs);
  return recent.length < maxPerWindow;
}

module.exports = { canSendNotification };
