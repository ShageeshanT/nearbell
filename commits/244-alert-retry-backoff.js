export function nextRetryDelayMs(attemptNumber, baseDelayMs = 2000, maxDelayMs = 30000) {
  const delay = baseDelayMs * Math.pow(2, attemptNumber);
  return Math.min(delay, maxDelayMs);
}
