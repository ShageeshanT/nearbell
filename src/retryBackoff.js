export function retryDelay(attempt, baseMs = 250) {
  return Math.min(5000, Math.max(0, attempt) * baseMs);
}
