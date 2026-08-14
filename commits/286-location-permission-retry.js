// Backs off exponentially between permission prompts to avoid annoying the user
export function nextRetryDelayMs(attempt, baseMs = 2000, maxMs = 60000) {
  return Math.min(maxMs, baseMs * 2 ** attempt);
}
