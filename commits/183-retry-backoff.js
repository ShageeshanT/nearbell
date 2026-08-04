export function retryBackoff(attempt = 0, baseMs = 1000, maxMs = 30000) { return Math.min(maxMs, baseMs * 2 ** Math.max(0, Number(attempt))); }
