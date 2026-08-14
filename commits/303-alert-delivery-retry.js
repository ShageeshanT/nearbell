// Retries a failed push notification delivery up to a fixed attempt limit
export function shouldRetryDelivery(attemptCount, maxAttempts = 3) {
  return attemptCount < maxAttempts;
}
