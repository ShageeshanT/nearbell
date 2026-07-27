/**
 * Trims an alert history array down to the most recent N
 * entries so local storage doesn't grow unbounded.
 */
function trimAlertHistory(history, maxEntries = 50) {
  if (history.length <= maxEntries) return history;
  return history.slice(history.length - maxEntries);
}

module.exports = { trimAlertHistory };
