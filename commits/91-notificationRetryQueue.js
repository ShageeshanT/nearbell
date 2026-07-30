// Retries failed push notification deliveries with exponential backoff.
function nextRetryDelayMs(attempt, baseMs = 1000, maxMs = 60000) {
  const delay = baseMs * Math.pow(2, attempt);
  return Math.min(delay, maxMs);
}

function shouldGiveUp(attempt, maxAttempts = 5) {
  return attempt >= maxAttempts;
}

module.exports = { nextRetryDelayMs, shouldGiveUp };
